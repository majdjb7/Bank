const express = require('express')
const router = express.Router()
const Transaction = require('../models/Transaction')

router.get('/transactions', function(req, res) {
    try {
        Transaction.find({}, function(err, transactions) {
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
                    id: req.body.newTransaction.id,
                    amount: req.body.newTransaction.amount,
                    vendor: req.body.newTransaction.vendor,
                    category: req.body.newTransaction.category
        })
        transaction1.save()
        res.send(transaction1)
    }
    catch(error) {
        console.log(error)
        res.send(error)
    }
})

router.delete('/transaction/:id', function(req, res) {
    try {
        Transaction.findOneAndDelete({_id: req.params.id}, function(err, transaction) {
            res.send(transaction)
        })
    }
    catch(error) {
        console.log(error)
        res.send(error)
    }
})


module.exports = router