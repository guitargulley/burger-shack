var Drinks = require('../models/drink')
var router = require('express').Router()

router.get('/api/drinks', (req, res, nezt) => {
    Drinks.find({})
        .then(drinks => {
            res.send(drinks)
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

router.get('/api/drinks/:id', (req, res, next) => {
    Drinks.findById(req.params.id)
        .then(drink => {
            res.send(drink)
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

router.post('/api/drinks', (req, res, next) => {
    if(!req.body.sizes.l || !req.body.sizes.m){
        return res.send('INVALID DRINK PLEASE INCLUDE SIZES')
    }
    var drink = {
        name: req.body.name,
        sizes: {
            l: req.body.sizes.l,
            m: req.body.sizes.m
        }
    }
   Drinks.create(drink)
    .then(drink=>{
        res.send(drink)
    })
    .catch(err =>{
        res.status(400).send({Error: err})
    })
})

router.put('/api/drinks/:id', (req, res, next) => {
    // if(!req.body.sizes.l || !req.body.sizes.m){
    //     return res.send('INVALID DRINK PLEASE INCLUDE SIZES')
    // }
    Drinks.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.send({message: 'You have changed the drink'})
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

module.exports = router










