const express = require('express')
app = express()
port = 3000


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

app.get('/search/:platform/:memberID', (req, res) => {
    platform = req.params.platform
    playerName = req.params.memberID
    playerObj =
        traveler
            .destiny2
            .searchDestinyPlayer(platform, playerName)
            .then(player => {
                res.json(player)
            })
            .catch(err => res.send("yea it broke.", error))
})





app.listen(port, () => console.log(`Express server is live and worldwide on port ${port}`))

