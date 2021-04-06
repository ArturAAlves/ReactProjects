import React from 'react'
import "./Home.scss"
import image1 from "./img/carousel/img1.jpg"
import Product from "../Product/Product"

function Home() {
    return (
        <div className="home">
            <div className="home-carousel">
                <img className="home-carousel-img" src={image1} alt="" />
            </div>
            <div className="home-items-container">
                <div className="home-items-row">
                    <Product />
                    <Product />
                </div>
                <div className="home-items-row">

                </div>
                <div className="home-items-row">

                </div>
            </div>
        </div>
    )
}

export default Home
