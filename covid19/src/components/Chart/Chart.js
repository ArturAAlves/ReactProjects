import React, { useState } from 'react'
import { red } from '@material-ui/core/colors'

import { Line, Bar } from "react-chartjs-2"

import styles from "./Chart.module.scss"




function Chart({ dailyData }) {
    const [chartMode, setChartMode] = useState("Line")


    console.log(dailyData)

    //data interval Logic
    const dataInterval = () => {

        const arr = []
        for (let index = 0; index < dailyData.length; index++) {
            arr.push(dailyData[index].reportDate)
        }
        return arr
    }
    // totalConfirmed
    const totalConfirmed = () => dailyData.reduce((acc, value) => {

        acc.push(value.totalConfirmed)
        return acc
    }, []);

    const totalRecovered = () => dailyData.reduce((acc, value) => {
        acc.push(value.incidentRate)
        return acc
    }, []);

    const totalDeaths = () => dailyData.reduce((acc, value) => {
        acc.push(value.deaths.total)
        return acc
    }, []);


    const lineChart = (
        dailyData ? <Line
            data={
                {
                    labels: dataInterval(),
                    datasets: [
                        {
                            data: totalConfirmed("totalConfirmed"),
                            label: "Infected",
                            fill: true,
                            borderColor: 'rgba(96, 96, 223,0.9)',
                            // backgroundColor: 'rgba(96, 96, 223,0.9)'
                            backgroundColor: "rgba(96, 96, 223,0.1)"
                        },
                        {
                            data: totalRecovered(),
                            label: "Recovered",
                            fill: true,
                            borderColor: 'rgb(32, 143, 32, 0.7)',
                            // backgroundColor: 'rgb(32, 143, 32, 0.7)'
                            backgroundColor: "rgb(32, 143, 32, 0.2)"

                        },
                        {
                            data: totalDeaths(),
                            label: "Deaths",
                            fill: true,
                            borderColor: 'rgb(182, 73, 73)',
                            // backgroundColor: 'rgb(182, 73, 73)'
                            backgroundColor: "rgba(182, 73, 73,0.2)"
                        }
                    ]

                    // data: { data.confirmed }, label: "Infeceted", fill: true, borderColor: "#3333ff",
                    // { data: data(({ deaths }) => deaths), label: "Deaths", fill: true, borderColor: "#3333ff" 

                }}

            options={{
                maintainAspectRatio: false
            }}
            height={300}
            width={600}
        /> : "Loading"
    )

    return (
        <div className={styles.container}>
            {lineChart}

        </div>
    )
}

export default Chart
