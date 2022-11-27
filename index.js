
const kycABI = [
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "aadhar",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "mail",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "phone",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "gender",
                        "type": "bool"
                    }
                ],
                "internalType": "struct KYC.identity",
                "name": "_identity",
                "type": "tuple"
            }
        ],
        "name": "addKYC",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "aadhar",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "mail",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "phone",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "gender",
                        "type": "bool"
                    }
                ],
                "internalType": "struct KYC.identity",
                "name": "_identity",
                "type": "tuple"
            }
        ],
        "name": "updateKYC",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "admin",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "identities",
        "outputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "aadhar",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "mail",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "phone",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "gender",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const agreementABI = [
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "source",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "destination",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "sourceTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "destinationTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "status",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "pooling",
                        "type": "bool"
                    }
                ],
                "internalType": "struct Agreement.agreement",
                "name": "_agreement",
                "type": "tuple"
            }
        ],
        "name": "addAgreement",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_kyc",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_agreementId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_status",
                "type": "uint256"
            }
        ],
        "name": "updateAgreement",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "admin",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "agreementList",
        "outputs": [
            {
                "internalType": "string",
                "name": "source",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "destination",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "sourceTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "destinationTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "status",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "pooling",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "buyerOrders",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "counter",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "kyc",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "sellerOrders",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const kycAddress = "0x644b454bE41214b65c8890F5905F776EdccaE43F";
const agreementAddress = "0xFFfb36d2900Bd9101C659d954279E553600abef1";

async function connect() {
    if (typeof window.ethereum !== 'undefined') {
        let n = ethereum.chainId
        if (n == '0x13881') {
            EThAppDeploy.loadEtherium();
        } else {
            let text = "WRONG NETWORK !, Switch to Polygon Network";
            if (confirm(text) == true) {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            chainId: '0x13881',
                            chainName: 'Polygon Mumbai',
                            rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
                            blockExplorerUrls: ['https://polygonscan.com/'],
                            nativeCurrency: {
                                symbol: 'MATIC',
                                decimals: 18
                            }
                        }
                    ]
                });
                connect();
            } else {
                alert('change network to move forward')
            }
        }
    } else {
        let text = "Please install metamask extension to continue";
        if (confirm(text) == true) {
            window.open('https://metamask.io/download/', '_blank');
        }
    }
}

EThAppDeploy = {
    loadEtherium: async () => {
        console.log(1);
        if (typeof window.ethereum !== 'undefined') {
            EThAppDeploy.web3Provider = ethereum;
            EThAppDeploy.requestAccount(ethereum);
        } else {
            alert(
                "Not able to locate an connection, please install a Metamask wallet"
            );
        }
    },
    requestAccount: async (ethereum) => {
        ethereum
            .request({
                method: 'eth_requestAccounts'
            })
            .then((resp) => {
                console.log(2);
                checkKyc(resp[0]);
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
var gas;
async function checkKyc(_address) {

    try {
        var web3 = new Web3(window.ethereum);

        gas = await web3.eth.getGasPrice();

        console.log(3);
        const contract = new web3.eth.Contract(kycABI, kycAddress);
        let result = await contract.methods.identities(_address).call();
        console.log('result', result);
        if (result[3] > 0) {
            $('#text02').html("Hello")
            $('#text08').text(result[0]);
            $('#text09').text("Connected");
            $('#text99').text("Onchain KYC Verified");
        } else {
            $('#text02').html("")
            $('#text08').text("");
            $('#text09').text("Verify KYC");
            $('#text99').text("Onchain KYC Verification Pending");
            $("#text98").attr("onclick", "_nextScrollPoint(event)");
        }

    } catch (err) {
        console.log(err);
    }

}

async function submit_kyc() {
    $('#kyc_form').submit();
}

document.getElementById('kyc_form').onsubmit = async function (event) {
    try {
        
    event.preventDefault();
    console.log(1);
    await connect();
    var name = document.getElementById('name').value;
    var mail = document.getElementById('mail').value;
    var phone = document.getElementById('mobile').value;
    var aadhar = document.getElementById('aadhar').value;
    var gender = document.getElementById('gender').value;
    var data = [name, aadhar, mail, phone, gender];

    console.log(data);

    var senderAddress = await getAccount();
    console.log(2);
    console.log(senderAddress);

    var web3 = new Web3(window.ethereum);
    var contract = new web3.eth.Contract(kycABI, kycAddress);
    console.log(contract);
    console.log(3);
    await contract.methods.addKYC(data)
        .send({ from: senderAddress,gasPrice: gas })
        .on('transactionHash', function (hash) {
            alert("Transaction hash : ", hash);
            checkKyc(senderAddress);
            profile_view();
        })
        .on('receipt', function (receipt) {
            console.log(receipt);
        })
        .on('error', function (error, receipt) {
            console.log(324);
            setTimeout( profile_view(), 2500);
        });

    } catch (error) {
        console.log(567);
        setTimeout( profile_view(), 2500);

    }
};

async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    return accounts[0];
}

async function upload_ride() {
    $('#ride_form').submit();
}

document.getElementById('ride_form').onsubmit = async function (event) {
    event.preventDefault();
    await connect();
    console.log(1);
    var source = document.getElementById('source').value;
    var destination = document.getElementById('destination').value;
    var sourceTime = document.getElementById('sourceTime').value;
    var destinationTime = document.getElementById('destinationTime').value;
    var seatprice = document.getElementById('seatprice').value;
    var pool = document.getElementById('pool').value;

    var data = [source, destination, parseInt(Date.parse(sourceTime) / 1000), parseInt(Date.parse(destinationTime) / 1000), seatprice, 1, pool];

    console.log('form_data', data);

    var senderAddress = await getAccount();
    console.log(2);
    console.log(senderAddress);

    var web3 = new Web3(window.ethereum);
    var contract = new web3.eth.Contract(agreementABI, agreementAddress);
    console.log(3);
    await contract.methods.addAgreement(data)
        .send({ from: senderAddress,gasPrice: gas })
        .on('transactionHash', function (hash) {
            alert("Transaction Send Successfully ");
            setTimeout( passenger_view(), 2500);
        })
        .on('receipt', function (receipt) {
            console.log(receipt);
        })
        .on('error', function (error, receipt) {
            console.log(error);
        });
};

async function OrdersCall() {

    try {
        var web3 = new Web3(window.ethereum);
        console.log(32);
        var data = [];
        const contract = new web3.eth.Contract(agreementABI, agreementAddress);
        for (var i = 1; i < 10; i++) {
            let result = await contract.methods.agreementList(i).call();

            if (result[0] != "") {
                data.push({ source: result[0], destination: result[1], time: result[2], price: result[4] });
            }
        }
        return data;
    } catch (err) {
        console.log(err);
    }

}

async function readOrders() {

    var table = document.getElementById('mytable');
    var input = document.getElementById('myinput');
    // var tableData = [{name: 'Onion', quantity: 29, price: 1.2, expiry: '2021-09-12'}, {name: 'Apple', quantity: 55, price: 3.3, expiry: '2021-09-22'}, {name: 'Potato', quantity: 25, price: 2.5, expiry: '2021-09-18'}, {name: 'Carrot', quantity: 8, price: 0.8, expiry: '2021-09-25'}];
    var tableData = await OrdersCall();
    console.log('table', tableData);
    var caretUpClassName = 'fa fa-caret-up';
    var caretDownClassName = 'fa fa-caret-down';

    const sort_by = (field, reverse, primer) => {

        const key = primer ?
            function (x) {
                return primer(x[field]);
            } :
            function (x) {
                return x[field];
            };

        reverse = !reverse ? 1 : -1;

        return function (a, b) {
            return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
        };
    };


    function clearArrow() {
        let carets = document.getElementsByClassName('caret');
        for (let caret of carets) {
            caret.className = "caret";
        }
    }


    function toggleArrow(event) {
        let element = event.target;
        let caret, field, reverse;
        if (element.tagName === 'SPAN') {
            caret = element.getElementsByClassName('caret')[0];
            field = element.id
        }
        else {
            caret = element;
            field = element.parentElement.id
        }

        let iconClassName = caret.className;
        clearArrow();
        if (iconClassName.includes(caretUpClassName)) {
            caret.className = `caret ${caretDownClassName}`;
            reverse = false;
        } else {
            reverse = true;
            caret.className = `caret ${caretUpClassName}`;
        }

        tableData.sort(sort_by(field, reverse));
        populateTable();
    }


    function populateTable() {
        table.innerHTML = '';
        for (let data of tableData) {
            let i = 1;
            let row = table.insertRow(-1);
            let source = row.insertCell(0);
            source.innerHTML = data.source;

            let destination = row.insertCell(1);
            destination.innerHTML = data.destination;

            let price = row.insertCell(2);
            price.innerHTML = data.price;

            let time = row.insertCell(3);
            time.innerHTML = new Date(parseInt(data.time) * 1000);

            let open = row.insertCell(4);
            open.innerHTML = '<a onclick="book_ride()">'+"Book"+'</a>';
            i++;
        }

        filterTable();
    }


    function filterTable() {
        let filter = input.value.toUpperCase();
        rows = table.getElementsByTagName("TR");
        let flag = false;

        for (let row of rows) {
            let cells = row.getElementsByTagName("TD");
            for (let cell of cells) {
                if (cell.textContent.toUpperCase().indexOf(filter) > -1) {
                    if (filter) {
                        cell.style.backgroundColor = 'yellow';
                    } else {
                        cell.style.backgroundColor = '';
                    }

                    flag = true;
                } else {
                    cell.style.backgroundColor = '';
                }
            }

            if (flag) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }

            flag = false;
        }
    }


    populateTable();

    let tableColumns = document.getElementsByClassName('table-column');

    for (let column of tableColumns) {
        column.addEventListener('click', function (event) {
            toggleArrow(event);
        });
    }

    input.addEventListener('keyup', function (event) {
        filterTable();
    });

}

readOrders();

async function book_ride() {
    event.preventDefault();
    await connect();
    console.log(1);
   
    var senderAddress = await getAccount();
    console.log(2);
    console.log(senderAddress);

    var web3 = new Web3(window.ethereum);
    var contract = new web3.eth.Contract(agreementABI, agreementAddress);
    console.log(3);
    await contract.methods.updateAgreement(1,2)
        .send({ from: senderAddress,gasPrice: gas })
        .on('transactionHash', function (hash) {
            alert("Transaction Send Successfully ");
            setTimeout( book_success(), 2500);
        })
        .on('receipt', function (receipt) {
            console.log(receipt);
        })
        .on('error', function (error, receipt) {
            console.log(error);
        });
}

async function profile_view() {
    document.getElementById("container02").scrollIntoView();
}

async function passenger_view() {
    document.getElementById("container06").scrollIntoView();
}

async function ride_details() {
    document.getElementById("container07").scrollIntoView();
}

async function book_success() {
    document.getElementById("container08").scrollIntoView();
}