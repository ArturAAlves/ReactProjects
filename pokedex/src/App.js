import axios from 'axios';
import { useEffect, useState } from 'react';
import PokeCard from "./components/PokeCard/PokeCard"

import logo from "./images/pokemonLogo.png"
import "./App.scss"

function App() {

  const mainUrl = "https://pokeapi.co/api/v2/pokemon?limit=3"
  let cancel

  const [pokemonList, setPokemonList] = useState("")
  const [nextPageUrl, setNextPageUrl] = useState("")
  const [previoustPageUrl, setPrevioustPageUrl] = useState("")


  const fetchPokemonList = async (page) => {
    try {
      const pokemonReturn = await axios(page, { cancelToken: axios.CancelToken(c => cancel = c) })
      setPokemonList([...pokemonReturn.data.results])
      setNextPageUrl(pokemonReturn.data.next)
      setPrevioustPageUrl(pokemonReturn.data.previous)

    } catch (err) {
      // Handle Error Here
      console.error("err");
    }
  };

  useEffect(() => {
    fetchPokemonList(mainUrl)
    return () => {
      cancel()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //Next Page Btns
  function handleNextBtn() {
    if (nextPageUrl) {
      fetchPokemonList(nextPageUrl)
    }
  }

  function handlePreviousBtn() {
    if (previoustPageUrl) {
      fetchPokemonList(previoustPageUrl)
    }
  }

  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      {previoustPageUrl ?
        <button type="button" className="big-button" onClick={handlePreviousBtn}>Previous</button> : null
      }

      <button type="button" className="big-button" onClick={handleNextBtn}>Next</button>
      <div className="pokedex">
        {pokemonList ?
          pokemonList.map((poke) => (
            // <PokeCard poke={poke} pokemonName={poke.name} key={poke.name} url={poke.url} />
            <PokeCard poke={poke} key={poke.name} url={poke.url} />

          ))
          : "loading"
        }
      </div>
    </div>
  );
}
export default App;
