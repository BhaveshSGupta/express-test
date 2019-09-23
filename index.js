const express = require('express')
const path = require('path')
const members = require('./Members')


const app = express()


// This route gets all members
app.get('/api/members', (req, res) =>  res.json(members))

//using static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`server is on ${PORT}`))
