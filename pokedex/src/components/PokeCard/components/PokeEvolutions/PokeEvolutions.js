import React from 'react'
import "./PokeEvolutions.scss"
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const PokeEvolutions = ({ evolution }) => {
    // console.log(evolution)
    // const imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${}.png`





    return (
        <div className="pokemon-evolution">
            { evolution ? evolution.map((el, i, e) => (
                <div className="pokemon-evolution-container" key={el.id}>
                    <div className="evolution-img-container" >
                        <img className="evolution-img" src={`https://pokeres.bastionbot.org/images/pokemon/${el.id}.png`} alt={el.name} />
                        <div className="evolution-arrow ">{el.name !== e[e.length - 1].name ? <DoubleArrowIcon /> : ""}</div>
                    </div>

                </div>

            )) : "loading..."
            }

        </div>
    )
}

export default PokeEvolutions
