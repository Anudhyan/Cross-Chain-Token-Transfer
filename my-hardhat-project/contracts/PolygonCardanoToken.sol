// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PolygonCardonaToken {
    mapping(address => uint256) public balances;

    event TokensMinted(address indexed user, uint256 amount);

    function mintTokens(address user, uint256 amount) public {
        balances[user] += amount;
        emit TokensMinted(user, amount);
    }
}
