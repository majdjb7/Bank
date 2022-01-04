import React, { Component } from 'react'
import '../styles/transaction.css'

class Transaction extends Component {

    deleteTransaction = () => {
        this.props.deleteTransaction(this.props.transaction._id)
    }

    render() {
        const transaction = this.props.transaction
        let color
        if(transaction.amount>=500) {
            color = "green"
        }
        else{
            color="red"
        }
        return (
            <div className={color}>
                <h2>Transaction</h2>
                <div>Amount: {transaction.amount}</div>
                <div>Vendor: {transaction.vendor}</div>
                <div>category: {transaction.category}</div>
                <button onClick={this.deleteTransaction}>Delete</button>
            </div>
        )
    }
}

export default Transaction