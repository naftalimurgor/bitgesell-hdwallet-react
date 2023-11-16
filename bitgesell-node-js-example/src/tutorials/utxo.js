const axios = require('axios');

const bitgesellAddress = 'your_address';

// Bitgesell API endpoint to get UTXOs for an address
const apiEndpoint = `https://explorer.bitgesell.it/api/address/${bitgesellAddress}/utxo`;

const axios = require('axios');

const getBitgesellUtxo = async (bitgesellAddress) => {
  try {
    // Bitgesell API endpoint to get UTXOs for an address
    const apiEndpoint = `https://explorer.bitgesell.it/api/address/${bitgesellAddress}/utxo`;

    // Make an HTTP GET request to the Bitgesell API
    const response = await axios.get(apiEndpoint);

    // Handle the response data (UTXOs)
    const utxos = response.data;
    console.log('UTXOs:', utxos);

    return utxos;
  } catch (error) {
    // Handle errors
    console.error('Error:', error.message);
    throw error; // You can choose to handle or propagate the error as needed
  }
};

getBitgesellUtxo(bitgesellAddress);
