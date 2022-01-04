import React, { Component } from 'react'
import Transaction from './Transaction';
import '../styles/transactions.css'

class Transactions extends Component {

    deleteTransaction = (transactionId) => {
        this.props.deleteTransaction(transactionId)
    }

    render() {
        const transactions = this.props.state.transactions
        return (
            <div id="transactions">
                <h1>Transactions</h1>
                {transactions.map(tr => <Transaction key={tr._id} deleteTransaction={this.deleteTransaction} transaction={tr} />)}
            </div>
        )
    }
}

export default Transactions