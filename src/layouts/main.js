import React from "react"
import Header from "./header"
import Footer from "./footer"
import { useStaticQuery, graphql } from 'gatsby'
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    spacer: {
      marginBottom: "5rem",
      [theme.breakpoints.down("md")]: {
        marginBottom: "2rem",
      },
    },
  }
})

const Main = ({ children }) => {
  const { classes } = useStyles();
  const data = useStaticQuery(graphql`
    query {
      allStrapiCategory {
        nodes {
          name
          strapi_id
        }
      }
    }
  `)
  return (
    <>
      <Header categories={data.allStrapiCategory.nodes}></Header>
      <div className={classes.spacer} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Main