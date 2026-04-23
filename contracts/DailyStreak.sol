// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title DailyStreak
 * @author MiniPay Streak Team
 * @notice A smart contract to manage daily check-ins and track user streaks on the Celo blockchain.
 * Optimized for MiniPay users with low gas overhead.
 */
contract DailyStreak {
    // Current version of the contract (more gas efficient as bytes32)
    bytes32 public constant VERSION = "1.1.1";

    // Mapping from user address to their current streak count
    mapping(address => uint256) public userStreakCount;
    
    // Mapping from user address to their last successful check-in timestamp
    mapping(address => uint256) public userLastCheckInTimestamp;

    /**
     * @notice Emitted when a user successfully checks in.
     */
    event UserCheckedIn(address indexed user, uint256 currentStreak, uint256 checkInTime);

    /**
     * @notice Emitted when a user's streak is reset due to inactivity.
     */
    event StreakReset(address indexed user, uint256 lastStreak, uint256 resetTime);

    // One day expressed in seconds
    uint256 public constant SECONDS_IN_A_DAY = 1 days;

    /**
     * @notice Allows a user to record their daily check-in.
     * @dev Increases streak if within 24-48 hours of last check-in, resets if > 48 hours.
     */
    function performCheckIn() external {
        uint256 lastCheckIn = userLastCheckInTimestamp[msg.sender];
        
        // Cooldown check: Must wait at least 24 hours between check-ins
        require(
            block.timestamp >= lastCheckIn + SECONDS_IN_A_DAY, 
            "DailyStreak: Cooldown period active. Please wait 24 hours."
        );

        // Streak logic:
        // 1. If it's the first time or they missed the 48-hour window, reset to 1
        // 2. If they are within the 24-48 hour window, increment the streak
        if (lastCheckIn == 0 || block.timestamp > lastCheckIn + (2 * SECONDS_IN_A_DAY)) {
            if (userStreakCount[msg.sender] > 0) {
                emit StreakReset(msg.sender, userStreakCount[msg.sender], block.timestamp);
            }
            userStreakCount[msg.sender] = 1;
        } else {
            userStreakCount[msg.sender] += 1;
        }

        userLastCheckInTimestamp[msg.sender] = block.timestamp;

        emit UserCheckedIn(msg.sender, userStreakCount[msg.sender], block.timestamp);
    }

    /**
     * @notice Calculates the time remaining until the next allowed check-in.
     * @param user The address of the user to check.
     * @return secondsRemaining The number of seconds until the next check-in is possible.
     */
    function getSecondsUntilNextCheckIn(address user) external view returns (uint256 secondsRemaining) {
        uint256 lastCheckIn = userLastCheckInTimestamp[user];
        if (lastCheckIn == 0) return 0;
        
        uint256 nextAllowedTime = lastCheckIn + SECONDS_IN_A_DAY;
        if (block.timestamp >= nextAllowedTime) {
            return 0;
        }
        
        return nextAllowedTime - block.timestamp;
    }

    /**
     * @notice Checks if the user's streak is currently active (within 48 hours of last check-in).
     * @param user The address of the user to check.
     * @return isActive True if the streak is still valid, false otherwise.
     */
    function isStreakActive(address user) external view returns (bool isActive) {
        uint256 lastCheckIn = userLastCheckInTimestamp[user];
        if (lastCheckIn == 0) return false;
        return block.timestamp <= lastCheckIn + (2 * SECONDS_IN_A_DAY);
    }
}
