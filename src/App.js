import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Transaction from './components/Transaction';
import Transactions from './components/Transactions';
import Operations from './components/Operations';


class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [
        { num: 1, amount: 3200, vendor: "Elevation", category: "Salary" },
        { num: 2, amount: -7, vendor: "Runescape", category: "Entertainment" },
        { num: 3, amount: -20, vendor: "Subway", category: "Food" },
        { num: 4, amount: -98, vendor: "La Baguetterie", category: "Food" }
      ],
      balance: 0
    }
  }

  getBalance = () => {
    let balance = 0
    this.state.transactions.map(tr => balance += parseInt(tr.amount))
    return balance
  }

  addOperation = (amount, vendor, category) => {
    let transactions = [...this.state.transactions]
    let newTransaction = {amount: amount, vendor: vendor, category: category}
    transactions.push(newTransaction)
    this.setState({ transactions })
  }

  deleteTransaction = (transactionId) => {
    let transactions = [...this.state.transactions]
    let indexOfTransaction = transactions.findIndex(tr => tr.num==transactionId)
    transactions.splice(indexOfTransaction, 1)
    this.setState({ transactions })
  }


  render() {
    const state = this.state
    const balance = this.getBalance()
    return (
      <Router>
      <div className="App">
          <div id="main-links">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/transactions">Transactions</Link>
            <Link className="link" to="/operations">Operations</Link>
            <span id="balance">Balance: {balance}₪</span>
          </div>

          <Route path="/transactions" exact render={() => <Transactions deleteTransaction={this.deleteTransaction} state={state}/>} />
          <Route path="/operations" exact render={() => <Operations addOperation={this.addOperation} state={state}/>} />
        </div>
      </Router>
    );
  }

}

export default App;
