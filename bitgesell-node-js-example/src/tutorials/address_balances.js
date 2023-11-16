/**
 * In this example we talk to an api to get balance of an address
 */

const axios = require('axios');
const BITGESELL_NODE_RPC = 'rpc.bglwallet.io';
const BITGESELL_EXPLORER_API = 'https://api.bitaps.com/bgl/v1/blockchain'

/**
 * Querying address by making api calls to the the Bitgesell API
 * @param {address} address 
 */
async function getAddressBalance(address) {
    try {
        const headers = {}
        const res = await axios.get(`${BITGESELL_EXPLORER_API}/address/transactions/${address}`)
        const { data } = res.data
        return data
    } catch (error) {
        console.log(error)
    }
}

(async () => {
    const address = 'bgl1qlmzckh904vze03n0lwzptt5dkmvf2vj3ev4qm9'
    const address_balance = await getAddressBalance(address)
    console.log(address_balance)
})()