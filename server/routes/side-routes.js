var Sides = require('../models/side')
var router = require('express').Router()


router.get('/api/sides', (req, res, nezt) => {
    Sides.find({})
        .then(sides => {
            res.send(sides)
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

router.get('/api/sides/:id', (req, res, next) => {
    Sides.findById(req.params.id)
        .then(side => {
            res.send(side)
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

router.post('/api/sides', (req, res, next) => {

   Sides.create(req.body)
    .then(side=>{
        res.send(side)
    })
    .catch(err =>{
        res.status(400).send({Error: err})
    })
})

router.put('/api/sides/:id', (req, res, next) => {
    // if(!req.body.sizes.l || !req.body.sizes.m){
    //     return res.send('INVALID DRINK PLEASE INCLUDE SIZES')
    // }
    Sides.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.send({message: 'You have changed the side'})
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

module.exports = router
