const express = require('express')
app = express()
port = 3000
fs = require('fs')
https = require('https')
url = require('url')


require('dotenv').config()






https.createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
}, app)
    .listen(port, () => {
        console.log(`Pulled Pork serving rezs on port ${port}`)
    })
