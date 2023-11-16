const bitcoin = require('bitcoinjs-lib');

// Generate three key pairs (addresses)
const keyPair1 = bitcoin.ECPair.makeRandom();
const keyPair2 = bitcoin.ECPair.makeRandom();
const keyPair3 = bitcoin.ECPair.makeRandom();

const pubkeys = [
  keyPair1.publicKey,
  keyPair2.publicKey,
  keyPair3.publicKey,
];

// Create a 2-of-3 multisig P2SH address
const redeemScript = bitcoin.script.multisig.output.encode(2, pubkeys);
const scriptPubKey = bitcoin.script.scriptHash.output.encode(bitcoin.crypto.hash160(redeemScript));
const multisigAddress = bitcoin.address.fromOutputScript(scriptPubKey);

console.log('Multisig Address:', multisigAddress);

// Create a transaction spending from the multisig address
const txb = new bitcoin.TransactionBuilder();
const fee = 5000; // Replace with actual fee
const amountToSend = 100000; // Replace with actual amount

// Add an input from the multisig address (replace 'inputTxHash' and 'inputIndex')
txb.addInput('inputTxHash', 0, undefined, redeemScript);

// Add an output to the transaction
txb.addOutput('recipient_address', amountToSend);

// Sign the transaction with 2 out of 3 private keys
txb.sign(0, keyPair1, redeemScript);
txb.sign(0, keyPair2, redeemScript);
// Uncomment the line below if you want to sign with the third key
// txb.sign(0, keyPair3, redeemScript);

// Build the transaction
const tx = txb.build();

console.log('Raw Transaction:', tx.toHex());
