import React from 'react'
import "./Pokebar.scss"
import { useSpring, animated, config } from "react-spring"




const Pokebar = ({ barWidth }) => {

    const props = useSpring(
        {
            config: config.wobbly,
            width: barWidth + "%", from: { width: "0%" },
            delay: 1100,
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
