import React, { useEffect } from 'react'
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Checkout from './components/Checkout/Checkout'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from './components/Login/Login'


const App = () => {




  return (
    <Router>
      <div className="app">

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>

        {/* Fix Header component Duplication */}
      </div>
    </Router>
  )
}

export default App
