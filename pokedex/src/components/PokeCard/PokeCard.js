import React from 'react'

function PokeCard({ name, url, fetchPokemon }) {

    if (fetchPokemon) {
        console.log(fetchPokemon)
    }


    // const imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`
    return (
        <div>
            <h5>{name}</h5>

        </div>
    )
}

export default PokeCard
