const express = require('express')
const jsbgl = require('./jsbgl/src/jsbgl')



const main = async () => {

    const app = express()
    const port = process.env.PORT || 3000

    app.use(express.json())

    app.get('/', (req, res) => res.send('Hello World!'))

    app.get('/create-wallet', async (req, res) => {
        try {
            await jsbgl.asyncInit(globalThis)

            const wallet = new globalThis.Wallet({
                path_type: 'BIP84',
                testnet: false,
            })
            return res.json({ msg: "success", wallet: JSON.stringify(wallet) })
        } catch (error) {
            res.json({ msg: "failed", error }).status(500)
        }
        res.json({ message: "wooot, I got the b15" })
    })

    app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))
}


main().catch(err => {
    console.log(err)
    // process.exit(1)
})