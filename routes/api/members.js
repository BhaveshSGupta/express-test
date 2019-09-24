const express = require('express')
const router = express.Router()
let members = require('../../Members')
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

// This route to update individual member
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    if(found){
        const upMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)){
                member.name = upMember.name ? upMember.name : member.name
                member.email = upMember.email ? upMember.email : member.email

                res.json({ msg: 'Member updated', member})
            }
        })
    }
    else{
     res.status(400).json({msg:`No Member with id of ${req.params.id} found`})   
    }

})


// This route to Delete individual member
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    if(found){
        members = members.filter(member  => member.id !== parseInt(req.params.id))
        res.json({ msg:'Member Deleted', members: members})
    }
    else{
     res.status(400).json({msg:`No Member with id of ${req.params.id} found`})   
    }

})

module.exports = router 