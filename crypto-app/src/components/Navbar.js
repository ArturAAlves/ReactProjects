import React from 'react'
import { Button, Menu, typography, Avatar, Typography } from 'antd'
import { Link } from "react-router-dom"
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import crypto from "../images/crypto.png"


const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container"></div>
            <Avatar src={crypto} size="large" />
            <Typography.Title level={2} className="logo">
                <Link to="/">Crypto</Link>
            </Typography.Title>
            {/* <button className="menu-control-container"></button> */}
        </div>
    )
}

export default Navbar
