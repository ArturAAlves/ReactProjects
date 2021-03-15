import axios from 'axios'
import React, { useState, useEffect } from 'react'

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
                    <div className="content-item" key={item.id}>
                        <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_pa}`} alt={item.title} ></img>

                        <p>{item.original_title}</p>
                        <div>{item.vote_average}</div>
                    </div>

                ))
                }
            </div>
        </div>
    )
}

export default Trending
