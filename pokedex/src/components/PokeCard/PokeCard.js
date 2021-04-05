import axios from 'axios';
import React, { useEffect, useState } from 'react'
import loadingAni from "../PokeCard/Images/preloader.gif"
import "./PokeCard.scss"
import CountUp from 'react-countup';
import Pokebar from "./components/PokeBar/Pokebar"
import PokeEvolutions from "./components/PokeEvolutions/PokeEvolutions"

function PokeCard({ url }) {
    const [pokemon, setPokemon] = useState("")
    const [pokemonHabitat, setPokemonHabitat] = useState("")
    const [pokemonType, setPokemonType] = useState("")
    const [pokemonChain, setPokemonChain] = useState("")
    const [evolutionTree, setEvolutionTree] = useState("")
    const [evolution, setEvolution] = useState("")
    let { name, id, stats, types, height, weight, species } = pokemon

    // pokemon && console.log(species.url)
    const colors = [
        { colorName: "fire", color: "#f57830" },
        { colorName: "grass", color: "#79bb5b" },
        { colorName: "electric", color: "#FCB925" },
        { colorName: "water", color: "#73d0f5" },
        { colorName: "ice", color: "#33addd" },
        { colorName: "ground", color: "#906523" },
        { colorName: "rock", color: "#8f7f67" },
        { colorName: "fairy", color: "#bfb0db" },
        { colorName: "poison", color: "#a082d6" },
        { colorName: "bug", color: "#A8D59F" },
        { colorName: "dragon", color: "#97B3E6" },
        { colorName: "psychic", color: "#bfb0db" },
        { colorName: "flying", color: "#b6bcbe" },
        { colorName: "fighting", color: "#d4cbb9" },
        { colorName: "normal", color: "#c0b6a4" },
        { colorName: "ghost", color: "#67626e52" },
        { colorName: "dark", color: "#3d3944" },
        { colorName: "steel", color: "#707070" },
    ];

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

    //FetchHabitat
    const imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    const fetchHabitat = async () => {
        try {
            const pokeAreaRequest = await axios(species.url)
            setPokemonHabitat(pokeAreaRequest.data.habitat.name)
        } catch (err) {
            console.error();
        }
    };


    //FetchSpecies
    const fetchSpecies = async (speciesUrl) => {
        try {
            const pokeAreaRequest = await axios(speciesUrl)
            setPokemonChain(pokeAreaRequest.data.evolution_chain.url)

        } catch (err) {
            console.error();
        }
    };

    //FetchChain
    const fetchChain = async (pokeChain) => {
        try {
            const pokeAreaRequest = await axios(pokeChain)
            setEvolutionTree(pokeAreaRequest.data.chain)

        } catch (err) {
            console.error();
        }
    };



    useEffect(() => {
        fetchPokemon()
        return () => {
            // cleanup
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        fetchHabitat()
        setPokemonType(types)

        return () => {
            // cleanup
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pokemon])


    useEffect(() => {
        if (pokemonType) {
            fetchSpecies(pokemon.species.url)
        }
        return () => {
            // cleanup
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pokemonType])


    useEffect(() => {
        if (pokemonChain) {
            fetchChain(pokemonChain)
        }
        return () => {
            // cleanup
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pokemonChain])


    useEffect(() => {
        if (evolutionTree) {
            setEvolution(getEvolutionInfo)
        }
        return () => {
            // cleanup
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [evolutionTree])






    //Get colors with color info
    const getColor = () => colors.filter(color => {
        let val = []

        if (pokemonType[0].type.name !== undefined) {
            val = color.colorName === pokemonType[0].type.name
        }

        if (pokemonType[0].type.name === undefined) {
            val = [{ colorName: "ghost", color: "#3d3944" }]
        }
        return val

    })


    // Add zeros to ID
    const resizeId = (valaasda) => {
        let res = valaasda.toString()
        while (res.length < 3) {
            res = "0" + res
        }
        return res
    }


    const getEvolutionInfo = () => {
        let getId = (val) => {
            return val.slice(-5).match(/\d+/g, '')
        }
        let evolution, base, second, third
        base = { name: evolutionTree.species.name, id: getId(evolutionTree.species.url) }

        if (evolutionTree.evolves_to[0]) {
            second = { name: evolutionTree.evolves_to[0].species.name, id: getId(evolutionTree.evolves_to[0].species.url) }

            if (evolutionTree.evolves_to[0].evolves_to[0]) {
                third = { name: evolutionTree.evolves_to[0].evolves_to[0].species.name, id: getId(evolutionTree.evolves_to[0].evolves_to[0].species.url) }
                evolution = [{ ...base }, { ...second }, { ...third }]
            } else {
                evolution = [{ ...base }, { ...second }]
            }
        } else {
            evolution = [{ ...base }]
        }
        return evolution
    }

    // if (evolutionTree) {
    //     console.log(evolution)
    // }

    return (
        <div className="pokeCard-container" style={{ backgroundColor: pokemonType ? getColor().length !== 0 ? getColor()[0].color : "red" : "" }}>
            {/* Pokemon img */}
            < div className="pokemon-img-container" >
                < img src={pokemon ? imgUrl : loadingAni} alt={name} className={pokemon ? "pokemon-img" : "pokemon-loading"} />
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
                               /250</span></div>

                            <Pokebar barWidth={item.base_stat / 2.4} />

                        </div>
                    )) : "loading..."
                }
            </div>
            <div className="pokemon-evolution-container">
                <PokeEvolutions evolution={evolution} />
            </div>

        </div >

    )
}

export default PokeCard
