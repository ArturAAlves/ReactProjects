import axios from 'axios';
import React, { useEffect, useState } from 'react'
import loadingAni from "../PokeCard/Images/loadingAni.gif"
import "./PokeCard.scss"
import CountUp from 'react-countup';

function PokeCard({ url, pokemonName }) {

    const [pokemon, setPokemon] = useState("")
    const [pokemonColor, setPokemonColor] = useState()
    const [pokemonHabitat, setPokemonHabitat] = useState("")
    const [loading, setLoading] = useState(true)

    const fetchPokemon = async () => {
        try {
            const pokemonRequest = await axios(url)
            // console.log(pokemonReturn.data)
            setPokemon(pokemonRequest.data)
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };

    const { name, id, stats, types, height, weight, species } = pokemon
    const imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`

    const fetchHabitat = async () => {
        try {
            const pokeAreaRequest = await axios(species.url)
            setPokemonHabitat(pokeAreaRequest.data.habitat.name)

        } catch (err) {
            console.error();
        }
    };

    // pokemon && console.log(species.url)

    const colors = [
        { colorName: "fire", color: "#f57830" },
        { colorName: "grass", color: "#79bb5b" },
        { colorName: "electric", color: "#FCB925" },
        { colorName: "water", color: "#73d0f5" },
        { colorName: "ground", color: "#906523" },
        { colorName: "rock", color: "#8f7f67" },
        { colorName: "fairy", color: "#bfb0db" },
        { colorName: "poison", color: "#a082d6" },
        { colorName: "bug", color: "#A8D59F" },
        { colorName: "dragon", color: "#97B3E6" },
        { colorName: "psychic", color: "#bfb0db" },
        { colorName: "flying", color: "#b6bcbe" },
        { colorName: "fighting", color: "#d4cbb9" },
        { colorName: "normal", color: "#8f989b" },
        { colorName: "ghost", color: "#3d3944" },
    ];

    useEffect(() => {
        fetchPokemon()
        return () => {
            // cleanup
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        fetchHabitat()
        return () => {
            // cleanup
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pokemon])



    const getColor = (colorToFilter) => colors.map((color) => {
        // console.log(colorToFilter)
        return color.colorName === colorToFilter ? setPokemonColor(color.color) : ""
    })

    if (types && loading) {
        getColor(types[0].type.name)
        setLoading(false)
    }

    if (pokemonColor) {
        // console.log(pokemonColor)
    }


    //Grow Animation


    const resizeId = (valaasda) => {
        let res = valaasda.toString()
        while (res.length < 3) {
            res = "0" + res
        }
        return res
    }

    console.log(resizeId("999"))

    return (
        <div className="pokeCard-container" style={{ backgroundColor: pokemonColor ? pokemonColor : "none" }}>
            {/* Pokemon img */}
            < div className="pokemon-img-container" >
                < img src={pokemon ? imgUrl : loadingAni} alt={name} className="pokemon-img" />
            </div >
            {/* top left */}
            < div className="pokemon-id" >#{id ? resizeId(id) : "Loading..."} </div >

            {/* top right */}
            < div className="pokemon-types" >
                {
                    pokemon ? types.map((item, i) => (
                        <div key={i} className="pokemon-type" >{item.type.name}</div>
                    )) : "loading..."
                }
            </div >
            <div className="pokecard-header-container">
                <div className="pokecard-name">{name}</div>
                <div className="pokecard-header-left">
                    <div>Weight: {weight ?
                        < CountUp
                            start={0}
                            end={weight}
                            duration={2}
                            separator={","}
                        /> : weight
                    }
                    </div>
                    <div>Height: {height ?
                        < CountUp
                            start={0}
                            end={height}
                            duration={2}
                            separator={","}
                        /> : height
                    }
                    </div>
                </div>
                <div className="pokecard-header-right">
                    {pokemonHabitat ? <div>Habitat: {pokemonHabitat}</div> : "loading..."}
                </div>
            </div>
            <div className="pokemon-stat-container">
                {
                    pokemon ? stats.map((item, i) => (
                        <div className="pokemon-stats" key={i}>
                            <div className="pokemon-stats-info">{item.stat.name}<span className="pokemon-stats-number">
                                < CountUp
                                    start={0}
                                    end={item.base_stat}
                                    duration={2}
                                    separator={","}
                                />
                               /150</span></div>

                            <div className="pokemon-stat-bar" style={{
                                width: `${item.base_stat / 1.456}%`,

                            }}>

                            </div>
                        </div>
                    )) : "loading..."
                }
            </div>
            <div className="pokemon-evolution-container">
            </div>

        </div >

    )
}

export default PokeCard
