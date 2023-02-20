// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;


contract KYC {

    address public admin;

    struct identity{
        string name;
        string aadhar;
        string mail;
        uint256 phone;
        bool gender;
    }

    mapping (address => identity) public identities;

    constructor()  {
        admin = msg.sender;
    }

    function addKYC(identity calldata _identity) public {
        // if(identities[msg.sender].phone == 0){
        identities[msg.sender] = identity ({name: _identity.name,aadhar: _identity.aadhar,mail: _identity.mail,phone: _identity.phone,gender: _identity.gender});
        // }
        // fire event
    }

    function updateKYC(identity calldata _identity) public {
        require(msg.sender == admin,"restricted");
        identities[msg.sender] = identity ({name: _identity.name,aadhar: _identity.aadhar,mail: _identity.mail,phone: _identity.phone,gender: _identity.gender});        
        // fire event
    }

    // check KYC 

}
