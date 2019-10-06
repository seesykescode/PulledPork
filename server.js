const express = require('express')
app = express()
port = 3000
fs = require('fs')
https = require('https')
url = require('url')


require('dotenv').config()

var Traveler = require('the-traveler').default;
const Enums = require('the-traveler/build/type-definitions')


const traveler = new Traveler({
    apikey: process.env.D2_API_KEY,
    userAgent: 'pulledPork2.0'
})


app.get('/', (req, res) => {
    res.send("It's lit, baby. Helllllooooooo WORLD")
    
})

app.get('/auth', (req, res) => {
   res.redirect(traveler.oauth.generateOAuthURL(process.env.D2_OAUTH_CLIENT))
})

app.get('/auth/callback', (req, res) => {
    let code = req.query.code 
    console.log(code)

    traveler.oauth.getAccessToken(code).then(oauth => {
        console.log(oauth)
    }).catch(err=>{
        console.log(err)
    })
})





https.createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
}, app)
    .listen(port, () => {
        console.log(`Pulled Pork serving rezs on port ${port}`)
    })
