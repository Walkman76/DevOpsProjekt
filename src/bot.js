const express = require('express')

const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {

    let msg = `<?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Say>Have you tried turning it off and on again?</Say>
    </Response>`
        
    res.set("Content-Type:", "text/xml")
    res.send(msg)
})