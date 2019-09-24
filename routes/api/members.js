const express = require('express')
const router = express.Router()
const members = require('../../Members')
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
    res.send(req.body)
})


module.exports = router 