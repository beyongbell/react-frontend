import React from "react"
import Lottie from "react-lottie"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"

import { makeStyles } from "tss-react/mui";

import animationData from "@images/data.json"

const useStyles = makeStyles()((theme) => {
    return {
        textContainer: {
            padding: "2rem",
            [theme.breakpoints.down("xs")]: {
              padding: "1rem",
            },
        },
        heading: {
            [theme.breakpoints.down("xs")]: {
              fontSize: "3.5rem",
            },
        },
    };
});

const HeroBlock = () => {
    const { classes } = useStyles();
    const matchesLG = useMediaQuery(theme => theme.breakpoints.down("lg"))
    const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))
    const matchesXS = useMediaQuery(theme => theme.breakpoints.down("xs"))

    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData,
    }

    return (
        <Grid container justify="space-around" alignItems="center">
            <Grid item classes={{ root: classes.textContainer }}>
                <Grid container direction="column">
                <Grid item>
                    <Typography align="center" variant="h1" classes={{ root: classes.heading }}> 
                        The Premier <br /> Developer Clothing Line
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography align="center" variant="h3">
                        high quality, custom-designed shirts, hats, and hoodies
                    </Typography>
                </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Lottie isStopped options={defaultOptions} width={ matchesXS ? "20rem" : matchesMD ? "30rem" : matchesLG ? "40rem" : "50rem" } />
            </Grid>
        </Grid>
    )
}

export default HeroBlock