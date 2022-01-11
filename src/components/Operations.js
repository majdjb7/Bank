import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import '../styles/operations.css'

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: "",
            vendor: "",
            category: "",
            leavePage: false
        }
    }
    deposit = () => {
        this.props.addOperation(this.state.amount, this.state.vendor, this.state.category)
        let leavePage = true
        this.setState({ leavePage })
    }

    handleInputChange = event => {
        const {value, name} = event.target; 
        this.setState({ [name]: value })
    }

    withdraw = () => {
        let amount = this.state.amount
        this.setState({ amount })
        this.props.addOperation(this.state.amount * -1, this.state.vendor, this.state.category)
        let leavePage = true
        this.setState({ leavePage })
    }

    render() {
        let leavePage = this.state.leavePage
        return (
            <div id="operations">
                <h1>Operations</h1>
                <div id="u-input">
                    <input
                        type="text"
                        name="amount"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="text"
                        name="vendor"
                        placeholder="Vendor"
                        value={this.state.vendor}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={this.state.category}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.deposit}>Deposit</button>
                    <button onClick={this.withdraw}>Withdraw</button>
                    {leavePage ? <Redirect to="/transactions" /> : null}
                </div>
            </div>
        )
    }
}

export default Operations