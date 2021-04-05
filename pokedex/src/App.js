import axios from 'axios';
import { useEffect, useState } from 'react';
import PokeCard from "./components/PokeCard/PokeCard"

import logo from "./images/pokemonLogo.png"
import "./App.scss"



function App() {
  const mainUrl = "https://pokeapi.co/api/v2/pokemon?limit=15"
  // let cancel
  const [pokemonList, setPokemonList] = useState("")
  const [nextPageUrl, setNextPageUrl] = useState("")
  const [previoustPageUrl, setPrevioustPageUrl] = useState("")
  const fetchPokemonList = async (page) => {
    try {
      const pokemonReturn = await axios(page)
      setPokemonList(currVal => currVal = [...pokemonReturn.data.results])
      setNextPageUrl(currentUrl => currentUrl = pokemonReturn.data.next)
      setPrevioustPageUrl(currentUrl => currentUrl = pokemonReturn.data.previous)

    } catch (err) {
      // Handle Error Here
      console.log(err)
    }
  };

  useEffect(() => {
    fetchPokemonList(mainUrl)
    return () => {
      // cancel()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //Next Page Btns
  function handleNextBtn() {
    if (nextPageUrl) {
      window.scrollTo(0, 0);
      fetchPokemonList(nextPageUrl)
    }
  }

  function handlePreviousBtn() {
    if (previoustPageUrl) {
      window.scrollTo(0, 0);
      fetchPokemonList(previoustPageUrl)
    }
  }

  const pokedex = () => (
    < div className="pokedex" >
      { pokemonList.map((poke) =>
      (<PokeCard
        url={poke.url}
        key={poke.name}
      // name={poke.name}
      // id={poke.id}
      // stats={poke.stats}
      // types={poke.types}
      // height={poke.height}
      // weight={poke.weight}
      // species={poke.species}

      />))
      }
    </div >)

  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="pokedex">
        {pokemonList ? pokedex() : "loading"}
      </div>
      <div className="main-btns-container">
        {previoustPageUrl ? <button type="button" className="big-button btn-prev" onClick={handlePreviousBtn}>Previous</button> : null}
        {nextPageUrl ? <button type="button" className="big-button btn-next" onClick={handleNextBtn}>Next</button> : null}
      </div>
    </div>

  );
}
export default App;
