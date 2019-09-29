const express = require('express')
      app = express()
      port = 3000
      request = require('request')

require('dotenv').config()

//used to add API key to header.
let baseRequest = request.defaults({ headers: { 'X-API-Key': process.env.D2_API_KEY } });
// to make referencing the Destiny API Endpoint shorter (API_URL + '')
let API_URL = "https://www.bungie.net/platform/"

      app.get('/', (req, res) => {
          res.send("It's lit, baby. Helllllooooooo WORLD")
      })

      app.get('/test/:membershipType/:userID', (req, res) => {
          let id = req.params.userID
          let platform = req.params.membershipType
          baseRequest(API_URL + `Destiny2/SearchDestinyPlayer/${platform}/${id}` , function(err,response, body) {
             console.log(body)
         } )

         res.send('I think something happened?')
      })

      app.listen(port, () => console.log(`Express server is live and worldwide on port ${port}`))

