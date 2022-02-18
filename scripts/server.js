// Library Imports
const compiledContract = require('../compiled_contracts/builds/MrCloudy.json');
const Web3 = require('web3');
const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require('fs');
const path = require('path');

const mnemonic = fs.readFileSync(path.resolve('.secret')).toString().trim();

// Connection Initialization
const provider = new HDWalletProvider(
	mnemonic,
	'wss://rinkeby.infura.io/ws/v3/69682cb3dc1240a2a25d18f02f97cf20'
);
const web3 = new Web3(provider);

// Data set up
let abi = compiledContract.abi;
let bytecode = compiledContract.evm.bytecode.object;

//Contract object and account info
let deploy_contract = new web3.eth.Contract(abi);
(async () => {
const accounts = await web3.eth.getAccounts();
let account = accounts[0];

// Function Parameter
let payload = {
    data: bytecode
}

let parameter = {
    from: account,
    gas: web3.utils.toHex(8000000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('20', 'gwei'))
}

console.log('Deploying the smart contract using '+account+' account');

// Function Call
deploy_contract.deploy(payload).send(parameter, (err, transactionHash) => {
    console.log('Transaction Hash :', transactionHash);
    console.info('Click here to check the transaction: '+'https://rinkeby.etherscan.io/tx/'+transactionHash);
}).on('confirmation', () => {}).then((newContractInstance) => {
    console.log('Deployed Contract Address : ', newContractInstance.options.address);
    console.info('Click here to access the contract: '+'https://rinkeby.etherscan.io/address/'+newContractInstance.options.address);
    process.exit(1);
})
})();