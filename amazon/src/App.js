import React, { useEffect } from 'react'
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Checkout from './components/Checkout/Checkout'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from './components/Login/Login'
import { auth } from "./firebase"
import { useStateValue } from './StateProvider'
import Footer from './components/footer/footer'

const App = () => {

  const [{ user }, disapatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser)

      if (authUser) {
        disapatch({
          type: "SET_USER",
          user: authUser
        })
        console.log("loggedIn")
      } else {
        console.log("loggedOut")
        disapatch({
          type: "SET_USER",
          user: null
        })
      }
    })


    return () => {
    }
  }, [])


  if (user) {
    console.log("user", user.email)

  }

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
        <Footer />
        {/* Fix Header component Duplication */}
      </div>
    </Router>
  )
}

export default App
