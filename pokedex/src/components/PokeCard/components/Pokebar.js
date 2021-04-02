import React from 'react'
import "./Pokebar.scss"
import { useSpring, animated } from "react-spring"


const Pokebar = ({ barWidth }) => {

    const props = useSpring(
        {
            width: barWidth + "%", from: { width: "0%" },
            background: "white"
        }
    )
    return (
        barWidth ?
            <animated.div className="pokemon-stat-bar"
                style={
                    props
                }
            >
            </ animated.div > : "loading"
    )
}

export default Pokebar
