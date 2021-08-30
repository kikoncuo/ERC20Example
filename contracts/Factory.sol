// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC20.sol";


contract Factory {
 
    mapping(string => address) bePlusTokens;

    function deploy(string memory tsin, string memory symbol) public {
        bePlusTokens[tsin] = address(new ERC20(tsin, symbol));
    }
    
    function getAddress(string memory tsin) public view returns (address) {
        return (bePlusTokens[tsin]);
    }
 
}