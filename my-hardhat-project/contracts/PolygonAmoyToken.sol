// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PolygonAmoyToken {
    mapping(address => uint256) public balances;

    event TokensLocked(address indexed user, uint256 amount);

    function lockTokens(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        emit TokensLocked(msg.sender, amount);
    }

    function creditBalance(uint256 amount) public {
        balances[msg.sender] += amount;
    }
}
