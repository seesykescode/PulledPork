const express = require('express')
      app = express()
      port = 3000

require('dotenv').config()



      app.get('/', (req, res) => {
          res.send("It's lit, baby. Helllllooooooo WORLD")
      })



      app.listen(port, () => console.log(`Express server is live and worldwide on port ${port}`))

