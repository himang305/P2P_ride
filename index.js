
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
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getAgreementCount",
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
	}
];

const kycAddress = "0x644b454bE41214b65c8890F5905F776EdccaE43F";
const agreementAddress = "0x31d2E49FC066C20C0D496C338829a80659427D85";

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
                console.log(3);
                userRides(resp[0]);
                console.log(4);
                readOrders();
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
        console.log('result', _address);
        if (result[3] > 0) {
            $('#text02').html("Hello")
            $('#text08').text("Wallet Connected : " + _address.substring(0,5) +"..."+_address.substring(39,42));
            $('#text09').text("Connected");
            $('#text99').text("Onchain KYC Verified");
            setTimeout( profile_view, 2500);
        } else {
            $('#text02').html("")
            $('#text08').text("Wallet Connected : " + _address.substring(0,5) +"..."+_address.substring(39,42));
            $('#text09').text("Verify KYC");
            $('#text99').text("Onchain KYC Verification Pending");

            $("#driv_view").attr("onclick", "driver_kyc_view()");
            $("#pass_view").attr("onclick", "passenger_kyc_view()");

            $("#text98").attr("onclick", "profile_view()");
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
    $('#loading').show();
    event.preventDefault();
    console.log(1);
    await connect();
    var name = document.getElementById('name').value;
    var mail = document.getElementById('mail').value;
    var phone = document.getElementById('mobile').value;
    var aadhar = document.getElementById('aadhar').value;
    var gender = document.getElementById('gender').value;

    var gender = document.getElementById('gender').value;
    var gender = document.getElementById('gender').value;
    var gender = document.getElementById('gender').value;

    var data = [name, aadhar, mail, phone, gender];

    console.log(data);

    var senderAddress = await getAccount();
    console.log(2);
    console.log(senderAddress);

    var web3 = new Web3(window.ethereum);
    var contract = new web3.eth.Contract(kycABI, kycAddress);
    console.log(3);

    await contract.methods.addKYC(data)
        .send({ from: senderAddress,gasPrice: gas })
        .on('transactionHash', function (hash) {
            console.log("Transaction hash : ", hash);
        })
        .on('receipt', function (receipt) {
            checkKyc(senderAddress);
            search_ride();
            $('#loading').hide();
            console.log(receipt);
        })
        .on('error', function (error, receipt) {
            console.log(324);
            setTimeout( profile_view, 2500);
        });

    } catch (error) {
        console.log(error);
        $('#loading').hide();

    }
};

async function submit_kyc_driver() {
    $('#kyc_form_driver').submit();
}

document.getElementById('kyc_form_driver').onsubmit = async function (event) {
    try {
        $('#loading').show();
    event.preventDefault();
    console.log('kyc_form_driver_submitted');
    await connect();
    var name = document.getElementById('name2').value;
    var mail = document.getElementById('mail2').value;
    var phone = document.getElementById('mobile2').value;
    var aadhar = document.getElementById('aadhar2').value;
    var gender = document.getElementById('gender2').value;

    // var gender = document.getElementById('gender').value;
    // var gender = document.getElementById('gender').value;
    // var gender = document.getElementById('gender').value;

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
            console.log("Transaction hash : ", hash);
        })
        .on('receipt', function (receipt) {
            console.log(receipt);
            // checkKyc(senderAddress);
            setTimeout( create_ride, 1000);
            $('#loading').hide();
        })
        .on('error', function (error, receipt) {
            console.log(error);
            // setTimeout( profile_view, 2500);
        });

    } catch (error) {
        console.log(error);
        $('#loading').hide();

    }
};

async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    return accounts[0];
}

async function upload_ride() {
    $('#create_ride_form').submit();
}

document.getElementById('create_ride_form').onsubmit = async function (event) {
    $('#loading').show();
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
            console.log("Transaction Send Successfully ");
        })
        .on('receipt', function (receipt) {
            console.log(receipt);
            setTimeout( search_ride, 1000);
            $('#loading').hide();
        })
        .on('error', function (error, receipt) {
            console.log(error);
            $('#loading').hide();
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
                data.push({ ids: i, source: result[0], destination: result[1], time: result[2], price: result[4] });
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
            open.innerHTML = '<a onclick="book_ride('+data.ids+')">'+"Book"+'</a>';
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

async function userRidesData() {

    try {
        var web3 = new Web3(window.ethereum);
        console.log("user ride data");
        var data2 = [];
        var senderAddress = await getAccount();
        console.log('rides_data_address: ',senderAddress);
        const contract = new web3.eth.Contract(agreementABI, agreementAddress);
        let count = 2;
        count = await contract.methods.getAgreementCount(senderAddress).call();
        console.log('user ride count = ', count);
        if(count > 0){
            for (var i = 0; i < count; i++) {
                let result = await contract.methods.buyerOrders(senderAddress, i).call();
                console.log('user ride result = ', result);
                if (result != "") {
                    let result2 = await contract.methods.agreementList(result).call();
                    console.log('user ride result2 = ', result2);
                    if (result2[0] != "") {
                        data2.push({ source: result2[0], destination: result2[1], time: result2[2], price: result2[4] });
                    }
                }
            }
        }
        return data2;
    } catch (err) {
        console.log(err);
    }

}

async function userRides() {
    console.log("user_ride called");
    var table = document.getElementById('mytable2');
    var input = document.getElementById('myinput2');
    var tableData = await userRidesData();
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

async function book_ride(ids) {
    $('#loading').show();
    await connect();
    console.log(1);
   
    var senderAddress = await getAccount();
    console.log(2);
    console.log(senderAddress);

    var web3 = new Web3(window.ethereum);
    var contract = new web3.eth.Contract(agreementABI, agreementAddress);
    console.log(3);
    await contract.methods.updateAgreement(ids,2)
        .send({ from: senderAddress,gasPrice: gas })
        .on('transactionHash', function (hash) {
            console.log("Transaction Send Successfully ");            
        })
        .on('receipt', function (receipt) {
            console.log(receipt);
            setTimeout( book_success, 2500);
            setTimeout( user_rides, 5000);
            setTimeout( userRides, 5000);
            $('#loading').hide();
        })
        .on('error', function (error, receipt) {
            console.log(error);
            $('#loading').hide();
        });
}

async function passenger_kyc_view() {
    document.getElementById("container01").scrollIntoView();
}

async function driver_kyc_view() {
    document.getElementById("container09").scrollIntoView();
}

async function profile_view() {
    document.getElementById("container02").scrollIntoView();
}

async function search_ride() {
    document.getElementById("container06").scrollIntoView();
}

async function user_rides() {
    document.getElementById("container07").scrollIntoView();
}

async function create_ride() {
    document.getElementById("container05").scrollIntoView();
}

async function book_success() {
    document.getElementById("container08").scrollIntoView();
}

$( document ).ready(function() {
    $('#loading').hide();
});


//      $('#loading').hide();  
//      $('#loading').show();  