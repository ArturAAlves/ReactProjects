import React from 'react'
import { Line, Bar } from "react-chartjs-2"

import styles from "./Chart.module.scss"




function Chart(data) {

    const lineChart = (
        data ? <Line
            data={
                {
                    labels: "",
                    datasets: [{}, {}]


                }
            }
        /> : "Loading"
    )


    return (
        <div>
            {lineChart}

        </div>
    )
}

export default Chart
