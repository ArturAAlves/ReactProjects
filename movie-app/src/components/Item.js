import React from 'react'
import { img_300, img_500, unavailable } from "../config/Config"

//Style
import "../scss/Item.scss"
const Item = ({ item, contentType }) => {
    const title = item.original_name || item.title
    const vote = item.vote_average
    const poster = item.poster_path
    const date = item.first_air_date || item.release_date
    const type = item.media_type ? item.media_type : contentType
    const id = item.id
    return (
        <div className="item-component" key={id}>
            <div className="item-img-container">
                <img src={`${img_300}${poster ? poster : unavailable}`} alt={item.title} ></img>
                <div className="score"> {vote}</div>
            </div>

            <div className="item-title-container">
                <p className="tittle"><b>{title}</b></p>
                <p className="type">{type}</p>
                <p className="date">{date}</p>
            </div>
        </div>
    )
}

export default Item
