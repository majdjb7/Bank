import React, { Component } from 'react'
import '../styles/operations.css'

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            transactions: []
        }
    }
    addOperation = () => {
        this.props.addOperation(this.state)
    }

    handleInputChange = event => {
        const {value, name} = event.target; 
        console.log(value, name)
        let transactions = [...this.state.transactions]
        let transaction = {[name]: value}
        transactions.push(transaction)
        this.setState({ transactions })
        console.log(transactions)
    }

    showAlert = () => {
        console.log(`${this.state.transactions}`)
    }

    render() {
        return (
            <div id="operations">
                <h1>Operations</h1>
                <div id="u-input">
                    <input type="text" name="amount" placeholder="Amount" onChange={this.handleInputChange}/>
                    <input type="text" name="vendor" placeholder="Vendor" onChange={this.handleInputChange}/>
                    <input type="text" name="category" placeholder="Category" onChange={this.handleInputChange}/>
                    <button onClick={this.showAlert}>Submit</button>
                </div>
            </div>
        )
    }
}

export default Operations