const axios = require('axios');

const getBitgesellAddressBalance = async (bitgesellAddress) => {
  try {
    const apiEndpoint = `https://api.bitaps.com/bgl/v1/blockchain/address/state/${bitgesellAddress}`;

    const response = await axios.get(apiEndpoint);
    const balanceData = response.data;

    console.log('Balance for address', bitgesellAddress, ':', balanceData.data.balance);
    return balanceData;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// Example usage
const bitgesellAddress = 'bgl1qlmzckh904vze03n0lwzptt5dkmvf2vj3ev4qm9';
getBitgesellAddressBalance(bitgesellAddress);
