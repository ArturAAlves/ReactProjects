import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Item from "../components/Item"

//Style
import "../scss/Trending.scss"


const Trending = () => {
    const [content, setContent] = useState([])
    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
        setContent(data.results)
    }

    useEffect(() => {
        fetchTrending()
    }, [])

    console.log(content)

    return (
        <div className="main-page-container">
            <div className="trending-content">
                {content && content.map((item) => (
                    <Item {...item} key={item.id} />
                ))
                }
            </div>
        </div>
    )
}

export default Trending
