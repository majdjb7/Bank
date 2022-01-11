import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios'
import Transactions from './components/Transactions';
import Operations from './components/Operations';
import Summary from './components/Summary';
import Home from './components/Home';


class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [],
      balance: 0
    }
  }

  componentDidMount() {
    // axios.post(`/transactions`)
    axios.get(`http://localhost:3001/transactions`)
      .then(res => {
        const transactions = res.data;
        this.setState({ transactions });
      })
  }

  getBalance = () => {
    let balance = 0
    let color
    this.state.transactions.map(tr => balance += parseInt(tr.amount))
    if(balance>=500) {
        color = "green"
    }
    else{
        color="red"
    }
    return [balance, color]
  }

  addOperation = (amount, vendor, category) => {
    let transactions = [...this.state.transactions]
    let newTransaction = {amount: amount, vendor: vendor, category: category}
    // axios.post(`/transaction`, { newTransaction })
    axios.post(`http://localhost:3001/transaction`, { newTransaction })

    transactions.push(newTransaction)
    this.setState({ transactions })
  }

  deleteTransaction = (transactionId) => {
    let transactions = [...this.state.transactions]
    let indexOfTransaction = transactions.findIndex(tr => tr._id===transactionId)
    // axios.delete(`/transaction/${transactionId}`)
    axios.delete(`http://localhost:3001/transaction/${transactionId}`)
    transactions.splice(indexOfTransaction, 1)
    this.setState({ transactions })
  }


  render() {
    const state = this.state
    let balance = this.getBalance()
    let balanceAmount = balance[0]
    let balanceColor = balance[1]
    
    return (
      <Router>
      <div className="App">
          <div id="main-links">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/transactions">Transactions</Link>
            <Link className="link" to="/operations">Operations</Link>
            <Link className="link" to="/summary">Summary</Link>
            <span className={balanceColor} id="balance">Balance: {balanceAmount}₪</span>
          </div>
          <Route path="/" exact render={() => <Home state={state}/>} />
          <Route path="/transactions" exact render={() => <Transactions deleteTransaction={this.deleteTransaction} state={state}/>} />
          <Route path="/operations" exact render={() => <Operations addOperation={this.addOperation} state={state}/>} />
          <Route path="/summary" exact render={() => <Summary state={state}/>} />
        </div>
      </Router>
    );
  }

}

export default App;
