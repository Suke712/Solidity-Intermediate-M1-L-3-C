// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract MyToken{

    mapping (address => uint) private balances;

    event Mint(address indexed owner, uint value);
    event Burn(address indexed owner, uint value);
    event Transfer(address indexed from, address indexed to, uint value);
    event Balance(address indexed owner, uint value);

    function mint(address _account, uint _value) public payable{
        balances[_account] += _value;
        emit Mint(_account, _value);
    }

     function burn(address _account, uint _value) public payable{
        balances[_account] -= _value;
        emit Burn(_account, _value);
    }

    function transfer(address _from, address _to, uint _value) public payable{
        require(balances[_from] >= _value, "Insufficient Tokens");
        balances[_from] -= _value;
        balances[_to] += _value;
        emit Transfer(_from, _to, _value);
    }

    function getBalance(address _account) public {
        uint  x = balances[_account];
        emit Balance(_account, x);
    }

}