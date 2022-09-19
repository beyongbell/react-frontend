import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Carousel from "react-spring-3d-carousel";
import clsx from "clsx";
import { useStaticQuery, graphql } from "gatsby";
import { makeStyles } from "tss-react/mui";

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
      marginLeft: "20rem",
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
      textAlign: "right",
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
      },
    },
  };
});

const PromotionalProducts = () => {
  const { classes } = useStyles();
  const data = useStaticQuery(graphql`
    query {
      allStrapiProduct(filter: { promotion: { eq: true } }) {
        nodes {
          name
          strapi_id
          description
          variants {
            images {
              url
            }
          }
        }
      }
    }
  `);
  console.log(data.allStrapiProduct.nodes);
  return (
    <Grid container alignItems="center" classes={{ root: classes.mainContainer }}>
        <Grid item>
            Carousel
        </Grid>
        <Grid item>
            Description    
        </Grid>
    </Grid>
  );
};

export default PromotionalProducts;
