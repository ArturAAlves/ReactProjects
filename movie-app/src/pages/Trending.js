import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Item from "../components/Item"
import PaginationComponent from "../components/Pagination"

//Style
import "../scss/App.scss"


const Trending = () => {
    const [page, setPage] = useState(1)
    const [content, setContent] = useState([])
    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
        setContent(data.results)
    }

    useEffect(() => {
        fetchTrending()
    }, [page])


    return (
        <div className="main-page-container">
            <div className="trending-content">
                <h3 className="page-tittles">Trending</h3>
                {content && content.map((item) => (
                    <Item {...item} key={item.id} />
                ))
                }
                <PaginationComponent setPage={setPage} />
            </div>

        </div>
    )
}

export default Trending
