import React from 'react'
import { Switch, Route, Link } from "react-router-dom"
import { Layout, Typgraphy, Space } from 'antd'
import { Navbar, Footer } from './components/'
import './App.scss'


const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main"></div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default App
