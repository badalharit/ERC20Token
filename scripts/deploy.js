const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require('web3');
const compiledContract = require('../compiled_contracts/builds/MrCloudy.json');
const fs = require('fs');
const path = require('path');

const mnemonic = fs.readFileSync(path.resolve('.secret')).toString().trim();

const provider = new HDWalletProvider(
	mnemonic,
	'wss://rinkeby.infura.io/ws/v3/69682cb3dc1240a2a25d18f02f97cf20'
);

const web3 = new Web3(provider);

(async () => {
	const accounts = await web3.eth.getAccounts();

	console.log(`Attempting to deploy from account: ${accounts[0]}`);

	const deployedContract = await new web3.eth.Contract(compiledContract.abi)
		.deploy({
			data: '0x' + compiledContract.evm.bytecode.object
		})
		.send({
			from: accounts[0],
			gas: '2000000'
		},
		(err, transactionHash) => {
			console.info(`Click here to check the transaction: https://rinkeby.etherscan.io/tx/${transactionHash}`);
		}
		);
	
	console.log(`Contract deployed at address: ${deployedContract.options.address}`);
	console.info(`Click here to access the contract: https://rinkeby.etherscan.io/address/${deployedContract.options.address}`);

	provider.engine.stop();
	process.exit(1);
})();