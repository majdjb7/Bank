const express = require('express')
const router = express.Router()
const Transaction = require('../models/Transaction')

router.get('/transactions', function(req, res) {
    try {
        Transaction.find({}, function(err, transactions) {
            console.log(transactions)
            res.send(transactions)
        })
    }
    catch(error) {
        console.log(error)
        res.send(error)
    }
})

router.post('/transaction', function(req, res) {
    try {
        transaction1 = new Transaction({
                    id: req.body.id,
                    amount: req.body.amount,
                    vendor: req.body.vendor,
                    category: req.body.category
        })
        transaction1.save()
        res.send(transaction1)
    }
    catch(error) {
        console.log(error)
        res.send(error)
    }
})

// ********************************************************************************************************
router.delete('/transaction', function(req, res) {
    try {
        console.log(req.body)
        Transaction.findOneAndDelete({id: req.body.id}, function(err, transaction) {
            console.log(transaction)
            res.send(transaction)
        })
        
        }
    catch(error) {
        console.log(error)
        res.send(error)
    }
})
// ********************************************************************************************************
router.delete('/city', function(req, res) {
    let cityName = req.query.cityName
    City.findOneAndDelete({name: cityName}, function(err, city) {
        console.log(city)
    })
    res.end()
})




module.exports = router