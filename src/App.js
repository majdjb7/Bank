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
        { amount: 3200, vendor: "Elevation", category: "Salary" },
        { amount: -7, vendor: "Runescape", category: "Entertainment" },
        { amount: -20, vendor: "Subway", category: "Food" },
        { amount: -98, vendor: "La Baguetterie", category: "Food" }
      ]
    }
  }
  render() {
    const state = this.state
    return (
      <Router>
      <div className="App">
          {/* <h1 id="logo">Bank</h1> */}
          <div id="main-links">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/transactions">Transactions</Link>

            {/* <Link className='link' to="/Majd1/Catalog">Catalog</Link> */}
          </div>

          {/* <Route path="/" exact render={() => <Home />}></Route> */}
          <Route path="/transactions" exact render={() => <Transactions  state={state}/>} />
          {/* <Route path="/:userID/catalog" exact render={({ match }) => <Catalog match={match} state={state} makeRented={this.makeRented}/>} /> */}
          {/* <Route path="/movies/:movieID" exact render={({ match }) => <MovieDetail match={match} state={state}/>}/> */}
        </div>
      </Router>
    );
  }

}

export default App;
