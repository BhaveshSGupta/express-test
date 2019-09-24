const express = require('express')
const router = express.Router()
const members = require('../../Members')
const uuid = require('uuid')

// This route to get individual member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    if(found){
        res.json(members.filter(member  => member.id === parseInt(req.params.id)))
    }
    else{
     res.status(400).json({msg:`No Member with id of ${req.params.id} found`})   
    }

})

// This route gets all members
router.get('/', (req, res) =>  res.json(members))


// Create a member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if(!newMember.name || !newMember.email){
       return res.status(400).json({msg: 'Please include a name and email'})
    }
    members.push(newMember);
    res.json(members)
})


module.exports = router 