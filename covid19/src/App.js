import React, { useEffect, useState } from 'react'
import './scss/App.scss';


import { Cards, Chart, CountryPicker } from "./components"
import { fetchData } from "./api/"

function App() {
  const [data, setData] = useState(0)

  useEffect(() => {

    (async () => {
      const fetchedData = await fetchData();
      setData(cards => cards = fetchedData)
    })();

    return () => {
      // cleanup
    }
  }, [])

  return (
    <div className="App">
      <Cards {...data} />
      <Chart />
      <CountryPicker />
    </div>
  );
}

export default App;
