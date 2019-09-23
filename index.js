const express = require('express')
const path = require('path')

const members = [{
    id:1,
    name:'test1',
    email:'test1@',
    status:'active'
},{
    id:2,
    name:'test2',
    email:'test2@',
    status:'active'
},{
    id:3,
    name:'test3',
    email:'test3@',
    status:'active'
},{
    id:4,
    name:'test4',
    email:'test4@',
    status:'active'
},{
    id:5,
    name:'test5',
    email:'test5@',
    status:'active'
}]

const app = express()

// This route gets all members
app.get('/api/members', (req, res) =>  res.json(members))




//using static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`server is on ${PORT}`))
