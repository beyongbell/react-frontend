import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Carousel from 'react-spring-3d-carousel';

import clsx from "clsx";

import { useStaticQuery, graphql } from "gatsby";

import { makeStyles } from "tss-react/mui";

import useMediaQuery from '@mui/material/useMediaQuery';

import { Link } from "gatsby"

import promoAdornment from "@images/promo-adornment.svg";
import explore from "@images/explore.svg";

const useStyles = makeStyles()((theme) => {
  return {
    mainContainer: {
      backgroundImage: `url(${promoAdornment})`,
      backgroundPosition: "top",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "70rem",
      padding: "30rem 10rem 10rem 10rem",
      [theme.breakpoints.down("lg")]: {
        padding: "20rem 2rem 2rem 2rem",
      },
      [theme.breakpoints.down("xs")]: {
        overflow: "hidden",
      },
    },
    productName: {
      color: "#fff",
    },
    iconButton: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    carouselImage: {
      height: "30rem",
      width: "25rem",
      backgroundColor: "#fff",
      borderRadius: 20,
      boxShadow: theme.shadows[5],
      [theme.breakpoints.down("sm")]: {
        height: "25rem",
        width: "20rem",
      },
      [theme.breakpoints.down("xs")]: {
        height: "20rem",
        width: "15rem",
      },
    },
    carouselContainer: {
      marginLeft: "0rem",
      [theme.breakpoints.down("md")]: {
        marginLeft: 0,
        height: "30rem",
      },
    },
    space: {
      margin: "0 15rem 10rem 15rem",
      [theme.breakpoints.down("sm")]: {
        margin: "0 8rem 10rem 8rem",
      },
      [theme.breakpoints.down("xs")]: {
        margin: "0 5rem 10rem 5rem",
      },
    },
    explore: {
      textTransform: "none",
      marginRight: "2rem",
    },
    descriptionContainer: {
      marginTop: "10rem",
      textAlign: "right",
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
      },
    },
  };
});

const PromotionalProducts = () => {
  const { classes } = useStyles();
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))
  const [selectedSlide, setSelectedSlide] = useState(0)
  const data = useStaticQuery(graphql`
    query {
      allStrapiProduct(filter: { promotion: { eq: true } }) {
        nodes {
          name
          strapi_id
          description
          category {
            name
          }
          variants {
            images {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 200)
                }
              }
            }
          }
        }
      }
    }
  `);

  let slides = []
  data.allStrapiProduct.nodes.forEach((item, i) => {
    const image = getImage(item.variants[0].images[0].localFile)
    slides.push({ 
      key: i,
      content: (
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <IconButton
              disableRipple
              onClick={() => setSelectedSlide(i)}
              classes={{
                root: clsx(classes.iconButton, {
                  [classes.space]: selectedSlide !== i,
                }),
              }}
            >
            <GatsbyImage image={image} alt={`image-${i}`} className={classes.carouselImage} objectFit="contain" />
            </IconButton>
          </Grid>
          <Grid item>
            {selectedSlide === i ? (
              <Typography variant="h1" classes={{ root: classes.productName }}>
                {item.category.name.toLowerCase()}
              </Typography>
            ) : null}
          </Grid>
        </Grid>
      ),
      description: item.description,
      url: `/${item.category.name.toLowerCase()}`,
    })
  });

  return (
    <Grid container classes={{ root: classes.mainContainer }}  justify={matchesMD ? "space-around" : "space-between"}>
      <Grid item md={6} classes={{ root: classes.carouselContainer }}>
        {typeof window !== "undefined" ? (
          <Carousel slides={slides} goToSlide={selectedSlide} />
        ) : null}
      </Grid>
      <Grid item md={6} classes={{ root: classes.descriptionContainer }} >
        <Typography variant="h2" paragraph>
          {slides[selectedSlide].description}
        </Typography>
        <Button component={Link} to={slides[selectedSlide].url}>
          <Typography variant="h4" classes={{ root: classes.explore }}>
            Explore
          </Typography>
          <img src={explore} alt="go to product page" />
        </Button>
      </Grid>
    </Grid>
  );
};

export default PromotionalProducts;
