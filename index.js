const express = require('express')
const path = require('path')
const members = require('./Members')
const logger = require('./middleware/logger')

const app = express()



//init MiddleWare
//app.use(logger)

// This route to get individual member
app.get('/api/members/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    if(found){
        res.json(members.filter(member  => member.id === parseInt(req.params.id)))
    }
    else{
     res.status(400).json({msg:`No Member with id of ${req.params.id} found`})   
    }

})

// This route gets all members
app.get('/api/members', (req, res) =>  res.json(members))

//using static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`server is on ${PORT}`))
