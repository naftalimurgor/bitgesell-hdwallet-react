const express = require('express')

const main = async () => {
    const app = express()
    const port = 3000

    app.use(express.json())

    app.get('/', (req, res) => res.send('Hello World!'))

    app.get('/create-wallet', (req, res) => {
        console.log(req.body)
        res.json({ success: true })
    })

    app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))
}


main().catch(err => {
    console.log(err)
    process.exit(1)
})