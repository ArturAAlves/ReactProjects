import axios from 'axios';
import { useEffect, useState } from 'react';
import Pokedex from "./components/Pokedex/Pokedex"
function App() {


  const [pokemon, setPokemon] = useState()
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState("")
  const [previoustPageUrl, setPrevioustPageUrl] = useState("")
  const [loading, setLoading] = useState(true)
  let cancel

  const fetchPokemons = async (page) => {

    try {
      const pokemonReturn = await axios(page, { cancelToken: axios.CancelToken(c => cancel = c) })
      setPokemon([pokemonReturn.data.results])
      setNextPageUrl(pokemonReturn.data.next)
      setPrevioustPageUrl(pokemonReturn.data.previous)
      console.log(pokemonReturn.data)
      setLoading(false)

    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };


  useEffect(() => {
    fetchPokemons(currentPageUrl)
    return () => {
      cancel()
    }
  }, [currentPageUrl])


  function handleNextBtn() {
    fetchPokemons(nextPageUrl)
  }

  function handlePreviousBtn() {
    fetchPokemons(previoustPageUrl)
  }



  console.log(pokemon)
  return (
    <div className="App">
      <button type="button" onClick={handlePreviousBtn}>Previous</button>
      <button type="button" onClick={handleNextBtn}>Next</button>
      {loading ? "loading" : "notloading"}


    </div>
  );
}
export default App;
