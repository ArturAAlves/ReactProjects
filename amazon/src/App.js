import React from 'react'
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Checkout from './components/Checkout/Checkout'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
