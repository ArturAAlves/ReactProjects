import axios from 'axios';
import { useEffect, useState } from 'react';
import PokeCard from "./components/PokeCard/PokeCard"
function App() {


  const [pokemonList, setPokemonList] = useState()
  const [pokemons, setPokemons] = useState()
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState("")
  const [previoustPageUrl, setPrevioustPageUrl] = useState("")
  const [loading, setLoading] = useState(true)
  let cancel


  // https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${searchLimit}

  // https://pokeres.bastionbot.org/images/${id}


  const fetchPokemonList = async (page) => {
    try {
      const pokemonReturn = await axios(page, { cancelToken: axios.CancelToken(c => cancel = c) })
      setPokemonList([...pokemonReturn.data.results])
      setNextPageUrl(pokemonReturn.data.next)
      setPrevioustPageUrl(pokemonReturn.data.previous)


    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };


  useEffect(() => {
    fetchPokemonList(currentPageUrl)
    return () => {
      cancel()
    }
  }, [currentPageUrl])


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


  const fetchPokemon = async (page) => {
    try {
      const pokemonReturn = await axios(page, { cancelToken: axios.CancelToken(c => cancel = c) })
      return pokemonReturn.data
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };


  return (
    <div className="App">
      <button type="button" onClick={handlePreviousBtn}>Previous</button>
      <button type="button" onClick={handleNextBtn}>Next</button>
      {pokemonList ?
        pokemonList.map((poke) => (
          <PokeCard {...poke} key={poke.name} fetchPokemon={fetchPokemon(poke.url)} />
        ))
        : "loading"
      }


    </div>
  );
}
export default App;
