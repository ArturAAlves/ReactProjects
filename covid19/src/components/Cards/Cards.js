import React from 'react'
import { Card, CardContent, Typography, Grid } from "@material-ui/core"
import CountUp from "react-countup"


import styles from "./Cards.module.scss"

const Cards = ({ confirmed, deaths, lastUpdate, recovered }) => {
    if (!confirmed || !deaths || !lastUpdate) {
        return "loading.."
    }


    console.log(new Date(lastUpdate).toDateString())
    return (

        <Grid container spacing={3} justify="center" className={styles.container} >
            <Card className={styles.card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Infected
                        </Typography>
                    <Typography variant="h5">
                        <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={2}
                            separator={","}
                        />
                    </Typography>
                    <Typography color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant="body2">
                        Number of active cases of COVID-19
                        </Typography>
                </CardContent>
            </Card>
            <Card className={styles.card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Recovered
                        </Typography>
                    <Typography variant="h5">
                        <CountUp
                            start={0}
                            end={recovered.value}
                            duration={2}
                            separator={","}
                        />
                    </Typography>
                    <Typography color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant="body2">
                        Number of recoveries from COVID-19
                        </Typography>
                </CardContent>
            </Card>

            <Card className={styles.card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Deaths
                        </Typography>
                    <Typography variant="h5">
                        <CountUp
                            start={0}
                            end={deaths.value}
                            duration={2}
                            separator={","}
                        />
                    </Typography>
                    <Typography color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant="body2">
                        Number of Deaths from COVID-19
                        </Typography>
                </CardContent>
            </Card>
        </Grid>

    )
}

export default Cards
