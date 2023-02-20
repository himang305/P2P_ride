// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./KYC.sol";

contract Agreement {

    address public admin;
    address public kyc;
    uint256 public counter;
    
    struct agreement{
        string source;
        string destination;
        uint256 sourceTime;
        uint256 destinationTime;
        uint256 price;
        uint256 status; // 1 placed, 2 booked, 3 completed, 4 cancelled
        bool pooling;
        // add hash instead data later
    }
    
    mapping (uint256 => agreement) public agreementList;
    mapping (address => uint256[]) public sellerOrders;
    mapping (address => uint256[]) public buyerOrders;

    constructor()  {
        admin = msg.sender;
    }
    // constructor(address _kyc)  {
    //     admin = msg.sender;
    //     kyc = _kyc;
    // }

    function addAgreement(agreement calldata _agreement) public {
        // require(KYC(kyc).identities[msg.sender]);
        counter++;
        agreementList[counter] = agreement ({source: _agreement.source,destination: _agreement.destination,sourceTime: _agreement.sourceTime,destinationTime: 0,price: _agreement.price,status: 1,pooling: _agreement.pooling});
        sellerOrders[msg.sender].push(counter);
    }

    function updateAgreement(uint256 _agreementId, uint256 _status) public {
        // require(KYC(kyc).identities[msg.sender]);
        agreementList[_agreementId].status = _status;
        buyerOrders[msg.sender].push(_agreementId);
    }

    function getAgreementCount(address _user) public view returns(uint){
        return buyerOrders[_user].length;
    }

}
