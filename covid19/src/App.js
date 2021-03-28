import React, { useEffect, useState } from 'react'
import './scss/App.scss';
import { Cards, Chart, CountryPicker } from "./components"
import { fetchData, fetchDailyData } from "./api/"

function App() {
  const [data, setData] = useState(0)
  const [dailyData, setDailyData] = useState(0)

  useEffect(() => {

    const getData = async () => {
      //All data call
      // const fetchedData = await fetchData();
      // setData(cards => cards = fetchedData)

      //Daily data call
      // const fetchedDailyData = await fetchDailyData();
      // await setDailyData(cards => cards = fetchedDailyData)


      setData(await fetchData())
      setDailyData(await fetchDailyData())
    }


    getData()
    // Self calling function 
    // (async () => {
    //   const fetchedData = await fetchData();
    //   setData(cards => cards = fetchedData)
    // })();

    return () => {
      // cleanup
    }


  }, [])

  return (
    <div className="App">
      <Cards {...data} />
      <Chart dailyData={dailyData.data} data={data} />
      <CountryPicker />
    </div>
  );
}

export default App;
