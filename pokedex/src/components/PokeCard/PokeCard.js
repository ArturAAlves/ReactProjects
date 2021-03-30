import axios from 'axios';
import React, { useEffect, useState } from 'react'
import loadingAni from "../PokeCard/Images/loadingAni.gif"


function PokeCard({ url, pokemonName }) {

    const [pokemon, setPokemon] = useState("")
    // const [loading, setLoading] = useState(false)

    const fetchPokemon = async () => {
        try {
            const pokemonReturn = await axios(url)
            // console.log(pokemonReturn.data)
            // console.log(pokemonReturn)
            setPokemon(pokemonReturn.data)

        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };
    // https://pokeapi.co/api/v2/location/1



    useEffect(() => {
        fetchPokemon()
        return () => {
            // cleanup
        }
    }, [])

    const { name, id, stats, types, height, weight } = pokemon
    const imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`

    if (pokemon) {
        console.log(pokemon)
    }

    return (

        <div>
            {pokemon ? < img src={imgUrl} alt={name} /> : <img src={loadingAni} alt="loading" />}
            <h5>{name}</h5>
            {pokemon ? types.map((item, i) => (
                <div key={i}>{item.type.name}</div>
            )) : "loading"
            }

            {pokemon ? stats.map((item, i) => (
                <div key={i}>{item.stat.name}:<div>{item.base_stat}</div></div>
            )) : "loading"
            }


        </div >
    )
}

export default PokeCard
