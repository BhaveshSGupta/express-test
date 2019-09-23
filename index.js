const express = require('express')
const path = require('path')
const moment = require('moment')
const members = require('./Members')


const app = express()

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`)
    next()
}

//init MiddleWare
app.use(logger)

// This route gets all members
app.get('/api/members', (req, res) =>  res.json(members))

//using static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`server is on ${PORT}`))
