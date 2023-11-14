const jsbgl = require("../jsbgl/src/jsbgl");


async function createWallet() {
    try {
        // initialize jsbgl and pass in the globalThis scope, this would be the window object for browser environments
        await jsbgl.asyncInit(globalThis)
        const wallet = new globalThis.Wallet({
            path_type: 'BIP84',
            testnet: false,
        })
        return wallet
    } catch (error) {

    }
}

(async () => {
    const wallet = await createWallet()
    console.log(wallet)
})()

