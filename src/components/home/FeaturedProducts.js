import React, { useState } from 'react'
import { Grid } from "@mui/material";
import { IconButton } from "@mui/material";
import { useStaticQuery, graphql } from "gatsby";
import { Typography } from "@mui/material"
import { Button } from "@mui/material";
import { Chip } from "@mui/material" ;

import { makeStyles } from "tss-react/mui";

import useMediaQuery from '@mui/material/useMediaQuery';

import featuredAdornment from "@images/featured-adornment.svg"
import frame from "@images/product-frame-grid.svg"
import explore from "@images/explore.svg"

import clsx from "clsx"

import Rating from '@components/home/Rating'

const useStyles = makeStyles()((theme) => {
    return {
        background: {
            backgroundImage: `url(${featuredAdornment})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "180rem",
            padding: "0 2.5rem",
            [theme.breakpoints.down("md")]: {
              height: "220rem",
            },
        },
        featured: {
            height: "20rem",
            width: "20rem",
            [theme.breakpoints.down("md")]: {
              height: "15rem",
              width: "15rem",
            },
          },
          frame: {
            backgroundImage: `url(${frame})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: 0,
            height: "24.8rem",
            width: "25rem",
            boxSizing: "border-box",
            boxShadow: theme.shadows[5],
            position: "absolute",
            zIndex: 1,
            [theme.breakpoints.down("md")]: {
              height: "19.8rem",
              width: "20rem",
            },
        },
        slide: {
            backgroundColor: theme.palette.primary.main,
            height: "20rem",
            width: "24.5rem",
            zIndex: 0,
            transition: "transform 0.5s ease",
            padding: "1rem 2rem",
            [theme.breakpoints.down("md")]: {
              height: "15.2rem",
              width: "19.5rem",
            },
        },
        slideLeft: {
            transform: "translate(-24.5rem, 0px)",
        },
        slideRight: {
            transform: "translate(24.5rem, 0px)",
        },
        slideDown: {
            transform: "translate(0px, 17rem)",
        },
        productContainer: {
            margin: "5rem 0",
        },
        exploreContainer: {
            marginTop: "auto",
        },
        exploreButton: {
            textTransform: "none",
        },
        exploreIcon: {
            height: "1.5rem",
            marginLeft: "1rem",
        },
        chipLabel: {
            ...theme.typography.h5,
        },
        chipRoot: {
            backgroundColor: theme.palette.secondary.main,
        },
    }
})

const FeaturedProducts = () => {
    const { classes } = useStyles();
    const [expanded, setExpanded] = useState(null);
    const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))
    const data = useStaticQuery(graphql`
        query {
            allStrapiProduct(filter: {featured: {eq: true}}) {
                nodes {
                    name
                    strapi_id
                    variants {
                        price
                        images {
                            localFile {
                                url,
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                    }
                }
            }
        } 
    `);
    return (
      <Grid container direction="column" justifyContent={matchesMD ? "space-between" : "center"} classes={{ root: classes.background }}>
        {data.allStrapiProduct.nodes.map((item, i) => {
            const alignment = i === 0 || i === 3 ? "flex-start" : i === 1 || i === 4 ? "center" : "flex-end"
            return (
                <Grid container justifyContent={alignment} key={item.strapi_id} alignItems="center" classes={{ root: classes.productContainer }}>
                    <Grid item>
                        <IconButton onClick={() => expanded === i ? setExpanded(null) : setExpanded(i) } classes={{ root: classes.frame }}>
                            <img src={item.variants[0].images[0].localFile.url} alt={item.name} className={classes.featured} />
                        </IconButton>
                        <Grid container direction="column" classes={{ root: clsx(classes.slide, {
                                [classes.slideLeft]:
                                !matchesMD && expanded === i && alignment === "flex-end",
                                [classes.slideRight]:
                                !matchesMD &&
                                expanded === i &&
                                (alignment === "flex-start" || alignment === "center"),
                                [classes.slideDown]: matchesMD && expanded === i,
                            }),
                        }}>
                            <Grid item>
                                <Typography variant="h4">{item.name.split(" ")[0]}</Typography>
                            </Grid>
                            <Grid item>
                                <Rating number={2.5} />
                            </Grid>
                            <Grid item>
                                <Chip
                                    classes={{ root: classes.chipRoot, label: classes.chipLabel }}
                                    label={`$${item.variants[0].price}`}
                                />
                            </Grid>
                            <Grid item classes={{ root: classes.exploreContainer }}>
                                <Button classes={{ root: classes.exploreButton }}>
                                    <Typography variant="h5"> Details </Typography>
                                    <img src={explore} alt="go to product details" classes={{ root: classes.exploreIcon }} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                )
            }
        )} 
      </Grid>
    )
}

export default FeaturedProducts;