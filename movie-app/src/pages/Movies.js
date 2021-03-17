import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Item from "../components/Item"
import PaginationComponent from "../components/Pagination"
import Genres from "../components/Genres"
//Style
import "../scss/App.scss"


const Trending = () => {
    const [page, setPage] = useState(1)
    const [content, setContent] = useState([])
    const [totalPages, setTotalPages] = useState(10)

    const fetchMovies = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&page=${page}`)
        setContent(data.results)
        setTotalPages(data.total_pages)
    }
    useEffect(() => {
        fetchMovies()
    }, [page])


    console.log(totalPages)

    return (
        <div className="main-page-container">
            <div className="trending-content">
                <Genres />
                <h3 className="page-tittles">Movies</h3>
                {content && content.map((item) => (
                    <Item item={item} contentType="movie" key={item.id} />
                ))}
                <PaginationComponent setPage={setPage} totalPages={totalPages} />
            </div>

        </div>
    )
}

export default Trending
