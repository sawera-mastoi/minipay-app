// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract DailyStreak {
    // @title DailyStreak
    // @notice A contract for daily checkins
    // Mapping from user address to their streak count
    mapping(address => uint256) public streaks;
    
    // Mapping from user address to their last check-in timestamp
    mapping(address => uint256) public lastCheckIn;

    // Event emitted when a user checks in
    event CheckedIn(address indexed user, uint256 streakCount, uint256 timestamp);

    // Constant for one day (in seconds)
    uint256 public constant ONE_DAY = 24 hours;

    /**
     * @dev Function to check in daily and increase streak.
     * Users can only check in once every 24 hours.
     */
    function checkIn() external {
        uint256 userLastCheckIn = lastCheckIn[msg.sender];
        
        // Ensure user hasn't checked in within the last 24 hours
        require(block.timestamp >= userLastCheckIn + ONE_DAY, "You can only check in once every 24 hours.");

        // If the user checked in between 24 and 48 hours, increment streak
        // If they missed a day (>48 hours), reset streak to 1
        // Exception: if userLastCheckIn is 0 (first time), start at 1
        if (userLastCheckIn == 0 || block.timestamp > userLastCheckIn + (2 * ONE_DAY)) {
            streaks[msg.sender] = 1;
        } else {
            streaks[msg.sender] += 1;
        }

        lastCheckIn[msg.sender] = block.timestamp;

        emit CheckedIn(msg.sender, streaks[msg.sender], block.timestamp);
    }

    /**
     * @dev Get the remaining time until the user can next check in.
     * @param user The address of the user.
     * @return remainingTime Time in seconds until next check-in is allowed. Returns 0 if allowed now.
     */
    function timeUntilNextCheckIn(address user) external view returns (uint256) {
        uint256 userLastCheckIn = lastCheckIn[user];
        if (userLastCheckIn == 0) return 0;
        
        uint256 nextAllowedTime = userLastCheckIn + ONE_DAY;
        if (block.timestamp >= nextAllowedTime) {
            return 0;
        }
        
        return nextAllowedTime - block.timestamp;
    }
}
