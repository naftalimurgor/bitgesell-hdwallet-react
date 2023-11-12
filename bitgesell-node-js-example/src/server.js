const express = require('express')
const jsbgl = require('./jsbgl/src/jsbgl')
async function initJsbglModule(scope) {
    try {
        await jsbgl.asyncInit(scope)
    } catch (error) {
        console.log(error)
    }
}
async function createWallet() {
    try {
        const wallet = new globalThis.Wallet({
            path_type: 'BIP84',
            testnet: false,
        })
        return JSON.stringify(wallet)
    } catch (error) {
        return null
    }
}

const main = async () => {
    try {
        await initJsbglModule(globalThis)
    } catch (error) {
        console.log(error);
    }
    const app = express()
    const port = process.env.PORT || 3000

    app.use(express.json())

    app.get('/', (req, res) => res.send('Hello World!'))

    app.get('/create-wallet', async (req, res) => {
        try {
            const wallet = createWallet()
            res.json({ sucess: true, wallet: wallet })
        } catch (error) {
            res.json({ msg: "failed" }).status(500)
        }
    })

    app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))
}


main().catch(err => {
    console.log(err)
    process.exit(1)
})