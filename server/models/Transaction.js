const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    id: Number,
    amount: Number,
    vendor: String,
    category: String
})

const Transaction = mongoose.model("Transaction", transactionSchema)
module.exports = Transaction
