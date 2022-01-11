import React, { Component } from 'react'
import '../styles/summary.css'

export default class Summary extends Component {
    getSumOfCategories = () => {
        let sumOfCategories = {}
        let transactions = this.props.transactions
        transactions.map(tr => {
            sumOfCategories[tr.category] ? sumOfCategories[tr.category] += parseInt(tr.amount)
                                        : sumOfCategories[tr.category] = parseInt(tr.amount)
        })
        return sumOfCategories
    }

    render() {
        let sumOfCategories = this.getSumOfCategories()
        return (
            <div id="summary">
                <h1>Summary</h1>
                <h2>Category: Sales</h2>
                {Object.keys(sumOfCategories).map((cat) => (
                    <h3 key={cat}>{cat} : {sumOfCategories[cat]}</h3>
                    ))}
            </div>
        )
    }
}
