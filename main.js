const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')))

app.get("/api", (req, res, next) => {
    res.json({
        this: "is my server",
        listening: "on port 5000",
        for: "my nodeJs server assignment"
    })
})

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "./", "routes", "welcome.html"))
})

app.listen(5000)