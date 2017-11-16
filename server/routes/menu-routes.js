var Drinks = require('../models/drink')
var Burgers = require('../models/burger')
var Sides = require('../models/side')
var router = require('express').Router()

router.get('/api/menu', (req, res, next) => {
    var menu = {}
    Drinks.find({},{name:1,sizes:1})
        .then(drinks => {
            menu.drinks = drinks
            Burgers.find({},{name:1,price:1})
                .then(burgers => {
                    menu.burgers = burgers
                    Sides.find({},{name:1, price:1})
                        .then(sides => {
                            menu.sides = sides
                            res.send(menu)
                        })
                        .catch(err => {
                            res.status(400).send({ Error: err })
                        })
                })
                .catch(err => {
                    res.status(400).send({ Error: err })
                })
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})


module.exports = router