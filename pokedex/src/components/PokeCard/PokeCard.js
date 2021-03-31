import axios from 'axios';
import React, { useEffect, useState } from 'react'
import loadingAni from "../PokeCard/Images/loadingAni.gif"
import "./PokeCard.scss"

function PokeCard({ url, pokemonName }) {

    const [pokemon, setPokemon] = useState("")
    const [pokemonHabitat, setPokemonHabitat] = useState("")

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

    return (


        <div className="pokeCard-container">
            {/* Pokemon img */}
            <div className="pokemon-img-container">
                < img src={pokemon ? imgUrl : loadingAni} alt={name} className="pokemon-img" />
            </div>
            {/* top left */}
            <div className="pokemon-id">#00{id}</div>
            {/* top right */}
            <div className="pokemon-types">
                {
                    pokemon ? types.map((item, i) => (
                        <div key={i} className="pokemon-type">{item.type.name}</div>
                    )) : "loading..."
                }
            </div>

            <div className="pokecard-header-container">
                <div className="pokecard-name">{name}</div>
                <div className="pokecard-header-left">
                    <div>Weight: {weight}</div>
                    <div>Height: {height}</div>
                </div>
                <div className="pokecard-header-right">
                    {pokemonHabitat ? <div>Habitat:{pokemonHabitat}</div> : "loading..."}
                </div>
            </div>
            <div className="pokemon-stat-container">
                {
                    pokemon ? stats.map((item, i) => (
                        <div className="pokemon-stats" key={i}>
                            <div className="pokemon-stats-info">{item.stat.name}<span className="pokemon-stats-number">{item.base_stat}/100</span></div>
                            <div className="pokemon-stat-bar"></div>
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
