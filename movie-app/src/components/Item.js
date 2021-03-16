import React from 'react'
import { img_300, img_500 } from "../config/Config"

//Style
import "../scss/Item.scss"
const Item = (item) => {
    const title = item.original_name ? item.original_name : item.title
    const vote = item.vote_average
    const poster = item.poster_path

    console.log(title)
    return (
        <div className="item-component">
            <div className="item-component-title">
                <p>{title}</p>
            </div>
            <div className="item-component-title">

                <img src={`${img_300}${poster}`} alt={item.title} ></img>
                <div> {vote}</div>
            </div>

        </div>
    )
}

export default Item
