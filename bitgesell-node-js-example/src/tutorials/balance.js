const axios = require('axios');

const getBitgesellAddressBalance = async (bitgesellAddress) => {
  try {
    const apiEndpoint = `https://explorer.bitgesell.it/api/address/${bitgesellAddress}/balance`;

    const response = await axios.get(apiEndpoint);
    const balance = response.data;

    console.log('Balance for address', bitgesellAddress, ':', balance);
    return balance;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// Example usage
const bitgesellAddress = 'your_bitgesell_address';
getBitgesellAddressBalance(bitgesellAddress);
