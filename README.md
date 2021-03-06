# ERC20Token

ERC20Token is a Solidity smart contract to create a new Ethereum ERC20 based token.

## Requirements

Use the official [NodeJs](https://nodejs.org/en/) website to install `node` in your machine.

```bash
node (v14.16.1)
```

## Setup

```bash
> npm init -y (To Setup `package.json`)
> npm install -save web3 (To install the `web3.js`)
> npm install -save solc (To install the `Solidity` compiler)
> npm install @truffle/hdwallet-provider (Package that we use to deploy the smart contract)
```

## Compiling & Using Smart Contract (ABI Migration)
###### Recommended*
Go to [RemixIDE](https://remix.ethereum.org/) and compile & deploy the contract using the IDE tools.

###### Not Recommended (For Newbies)
```bash
> node scripts/compile.js 
> node scripts/server.js
OR
> node scripts/deploy.js
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update the solidity compiler as appropriate.

## License
MIT License

Copyright (c) 2022 badalharit

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
