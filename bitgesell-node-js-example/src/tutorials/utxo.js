const axios = require('axios');

const axios = require('axios');

// Bitgesell API endpoint to get UTXOs for an address

const BITGESELL_EXPLORER_API = 'https://api.bitaps.com/bgl/v1/blockchain'

// /address/utxo/{address}


const getAddressUtxo = async (bitgesellAddress) => {
    try {

        const apiEndpoint = `${BITGESELL_EXPLORER_API}/address/utxo/${bitgesellAddress}`;
        const response = await axios.get(apiEndpoint);
        const { data: utxos } = response.data.data;
        console.log('UTXOs:', utxos);
        return utxos;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

(async () => {
    const address = await getAddressUtxo()
    console.log(address)
})()
