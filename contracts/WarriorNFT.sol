// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title WarriorNFT
 * @author MiniPay Team
 * @notice An NFT contract for Warrior PFPs on Celo Mainnet.
 */
contract WarriorNFT is ERC721, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;
    uint256 public constant MINT_PRICE = 5 ether; // 5 CELO

    event WarriorMinted(address indexed owner, uint256 tokenId, string tokenURI);

    constructor(address initialOwner) 
        ERC721("Celo Warrior PFP", "CWP") 
        Ownable(initialOwner)
    {}

    /**
     * @notice Mints a new Warrior PFP NFT.
     * @param uri The metadata URI (e.g., Pollinations AI image link).
     */
    function mintWarrior(string memory uri) public payable {
        require(msg.value >= MINT_PRICE, "Insufficient CELO to mint");
        
        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, uri);

        emit WarriorMinted(msg.sender, tokenId, uri);
    }

    /**
     * @notice Withdraws the contract balance to the owner.
     */
    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        payable(owner()).transfer(balance);
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

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
