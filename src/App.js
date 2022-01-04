import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios'
import Transaction from './components/Transaction';
import Transactions from './components/Transactions';
import Operations from './components/Operations';


class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [],
      balance: 0
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/transactions`)
      .then(res => {
        const transactions = res.data;
        this.setState({ transactions });
      })
  }

  getBalance = () => {
    let balance = 0
    this.state.transactions.map(tr => balance += parseInt(tr.amount))
    return balance
  }

  addOperation = (amount, vendor, category) => {
    let transactions = [...this.state.transactions]
    let newTransaction = {amount: amount, vendor: vendor, category: category}

    axios.post(`http://localhost:3001/transaction`, { newTransaction })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

    transactions.push(newTransaction)
    this.setState({ transactions })
  }

  deleteTransaction = (transactionId) => {
    let transactions = [...this.state.transactions]
    let indexOfTransaction = transactions.findIndex(tr => tr._id==transactionId)
    axios.delete(`http://localhost:3001/transaction/${transactionId}`)
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
