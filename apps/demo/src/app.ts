import { Application } from '@nativescript/core';
import { Client, eth_personalSign, eth_signTypedData, init, PrivateKey } from '@nstudio/nativescript-walletconnect';
init();
// import { Inquiry } from '@nstudio/nativescript-persona';

// Inquiry.init();
declare const com, io;
Client.initialize('a296125a15cc255e4aa63fffdc421458', null, {
	description: 'WalletConnect Developer App',
	url: 'https://walletconnect.org',
	icons: ['https://walletconnect.org/walletconnect-logo.png'],
	name: 'WalletConnect',
});

console.dir((io as any).nstudio.plugins.walletconnect.NSCWalletConnectV2.Numeric);

const key = new PrivateKey();


const data = ['0x4d7920656d61696c206973206a6f686e40646f652e636f6d202d2031363734353533313833303131', '0x8e210C23Fc543B754F7eA84EC10e1aDA0Efe944b'];
console.log(eth_personalSign(key, data));


const typedData = {
	types: {
	  EIP712Domain: [
		{ name: "name", type: "string" },
		{ name: "version", type: "string" },
		{ name: "chainId", type: "uint256" },
		{ name: "verifyingContract", type: "address" },
	  ],
	  Person: [
		{ name: "name", type: "string" },
		{ name: "account", type: "address" },
	  ],
	  Mail: [
		{ name: "from", type: "Person" },
		{ name: "to", type: "Person" },
		{ name: "contents", type: "string" },
	  ],
	},
	primaryType: "Mail",
	domain: {
	  name: "Example Dapp",
	  version: "1.0",
	  chainId: 1,
	  verifyingContract: "0x0000000000000000000000000000000000000000",
	},
	message: {
	  from: {
		name: "Alice",
		account: "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
	  },
	  to: {
		name: "Bob",
		account: "0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
	  },
	  contents: "Hey, Bob!",
	},
  };

  console.log(eth_signTypedData(key, typedData));


Application.run({ moduleName: 'app-root' });
