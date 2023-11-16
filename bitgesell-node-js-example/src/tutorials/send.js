const bitcoin = require('bitcoinjs-lib');
const axios = require('axios');

const sendBitgesellTransaction = async function(privateKey, toAddress, amount) {
  try {
    const keyPair = bitcoin.ECPair.fromPrivateKey(Buffer.from(privateKey, 'hex'));
    const txb = new bitcoin.TransactionBuilder();
    txb.addInput('inputTxHash', 0);
    txb.addOutput(toAddress, amount);
    txb.sign(0, keyPair);
    const tx = txb.build();
    const rawTransaction = tx.toHex();
    const apiEndpoint = 'https://api.bitgesell.it/transaction';
    const response = await axios.post(apiEndpoint, { rawTransaction });
    const transactionResult = response.data;
    console.log('Transaction Result:', transactionResult);
    return transactionResult;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

const senderPrivateKey = 'sender_private_key';
const toAddress = 'recipient_address';
const amountToSend = 100000;

sendBitgesellTransaction(senderPrivateKey, toAddress, amountToSend);
