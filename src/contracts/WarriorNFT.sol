// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts@4.9.6/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@4.9.6/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@4.9.6/access/Ownable.sol";

/**
 * @title WarriorNFT
 * @author MiniPay Team
 * @notice An NFT contract for Warrior PFPs on Celo Mainnet with tiered pricing.
 */
contract WarriorNFT is ERC721, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    enum Tier { Bronze, Silver, Gold, Diamond, Mythic }

    mapping(Tier => uint256) public tierPrice;
    mapping(uint256 => Tier) public tokenTier;

    event WarriorMinted(address indexed owner, uint256 tokenId, string tokenURI, Tier tier);

    constructor() 
        ERC721("Celo Warrior PFP", "CWP") 
    {
        tierPrice[Tier.Bronze]  = 0.5 ether;  // 0.5 CELO
        tierPrice[Tier.Silver]  = 2 ether;     // 2 CELO
        tierPrice[Tier.Gold]    = 5 ether;     // 5 CELO
        tierPrice[Tier.Diamond] = 10 ether;    // 10 CELO
        tierPrice[Tier.Mythic]  = 50 ether;    // 50 CELO
    }

    /**
     * @notice Mints a new Warrior PFP NFT at the specified tier.
     * @param uri The metadata URI (e.g., Pollinations AI image link).
     * @param tier The pricing tier (0=Bronze, 1=Silver, 2=Gold, 3=Diamond, 4=Mythic).
     */
    function mintWarrior(string memory uri, uint8 tier) public payable {
        require(tier <= uint8(Tier.Mythic), "Invalid tier");
        Tier selectedTier = Tier(tier);
        require(msg.value >= tierPrice[selectedTier], "Insufficient CELO for this tier");
        
        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, uri);
        tokenTier[tokenId] = selectedTier;

        emit WarriorMinted(msg.sender, tokenId, uri, selectedTier);
    }

    /**
     * @notice Returns the tier of a given token.
     */
    function getTokenTier(uint256 tokenId) public view returns (Tier) {
        return tokenTier[tokenId];
    }

    /**
     * @notice Withdraws the contract balance to the owner.
     */
    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        (bool success, ) = payable(owner()).call{value: balance}("");
        require(success, "Withdraw failed");
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
