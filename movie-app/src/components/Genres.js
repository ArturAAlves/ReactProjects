import React, { useEffect } from 'react';
import Chip from '@material-ui/core/Chip';
import axios from 'axios';



const OutlinedChips = ({ type, genres, selectedGenres, setGenres, setSelectedGenres }) => {
    // type = { contentType }
    // selectedGenres = { selectedGenres }
    // genres = { genres }
    // setGenres = { setGenres }
    // setSelectedGenres = { setSelectedGenres }


    const fetchGenres = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        )
        setGenres(data.genres)

    }
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };






    useEffect(() => {
        fetchGenres()
        return () => {
            setGenres([])
        }
    }, [])


    return (
        <div className="chip"
            style={{
                padding: "3px",
                display: 'flex',
                flexWrap: "wrap",
                justifyContent: "center",
                marginBottom: "15px"
            }}>
            {genres && genres.map((item) => (
                <Chip
                    label={item.name}
                    key={item.id}
                    style={{ margin: "5px" }}
                    clickable size="small"
                />
            ))}
        </div>
    );
}


export default OutlinedChips