// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ERC721Tradable.sol";

/**
 * @title SOOMOK PROOF
 * SOOMOK PROOF - Welcome to NFTworld of SoomokTube
 */
contract SoomokProof is ERC721Tradable {
    constructor(address _proxyRegistryAddress)
        ERC721Tradable("SOOMOK PROOF", "SOOMOK", _proxyRegistryAddress)
    {}

    function baseTokenURI() override public pure returns (string memory) {
        return "https://raw.githubusercontent.com/IngyuTae/soomok-proof/main/metadata/";
    }

    function contractURI() public pure returns (string memory) {
        return "https://raw.githubusercontent.com/IngyuTae/soomok-proof/main/metadata/contract";
    }
}
