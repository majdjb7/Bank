import React, { Component } from 'react'
import '../styles/transaction.css'

class Transaction extends Component {
    render() {
        const transaction = this.props.transaction
        return (
            <div>
                <h2>Transaction</h2>
                <div>Amount: {transaction.amount}</div>
                <div>Vendor: {transaction.vendor}</div>
                <div>category: {transaction.category}</div>
            </div>
        )
    }
}

export default Transaction