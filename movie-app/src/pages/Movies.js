import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Item from "../components/Item"
import PaginationComponent from "../components/Pagination"
import Genres from "../components/Genres"
import useGenres from "../hooks/useGenre"
//Style
import "../scss/App.scss"

const Trending = () => {
    const [page, setPage] = useState(1)
    const [content, setContent] = useState([])
    const [totalPages, setTotalPages] = useState(1)
    const [selectedGenres, setSelectedGenres] = useState([])
    const [genres, setGenres] = useState([])
    const contentType = "movie"
    const genreList = useGenres(selectedGenres)

    const fetchMovies = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreList}`)
        setContent(data.results)
        setTotalPages(data.total_pages)
        console.log(data)
    }

    useEffect(() => {
        fetchMovies()
    }, [page, genreList])

    return (
        <div className="main-page-container">
            <div className="trending-content">
                <h3 className="page-tittles">Movies</h3>
                <Genres
                    type={contentType}
                    selectedGenres={selectedGenres}
                    genres={genres}
                    setGenres={setGenres}
                    setSelectedGenres={setSelectedGenres}
                    setPage={setPage}
                />


                {content && content.map((item) => (
                    <Item item={item} contentType={contentType} key={item.id} />
                ))}
                <PaginationComponent setPage={setPage} totalPages={totalPages} />
            </div>

        </div>
    )
}

export default Trending
