import React from 'react'
import "./Product .scss"
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStateValue } from '../../StateProvider';



const Product = ({ id, title, image, price, rating, qty }) => {
    const [basket, dispatch] = useStateValue()


    function getRating() {
        return [...Array((parseInt(rating)))].map((item, i) => (
            <StarIcon key={i} />
        ));
    }



    const addToBasket = () => {
        // basket.basket.map((items) => {
        //     while (items.id !== id) {
        //         return console.log(items)
        //     }
        // })

        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                qty: qty
            }
        })



    }

    return (
        <div className="product">
            <div className="product-info">
                <div className="product-title">
                    <h5>{title}</h5>
                </div>

                {price
                    ? <div className="product-price">
                        <small>€</small><p>{price}</p>
                    </div>
                    : "Loading.."
                }
            </div>
            <div className="product-img">
                {image
                    ? <img src={image} alt={title} />
                    : ""
                }
            </div>
            {rating
                ? <div className="product-rating">
                    {getRating()}
                </div>
                : "Loading.."
            }
            <div className="product-btn-container">
                <button onClick={addToBasket} type="button" className="product-btn">Add to Basket</button>
            </div>
        </div >
    )
}

export default Product
