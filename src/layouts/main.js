import React from "react"
import Header from "./header"
import Footer from "./footer"
import { useStaticQuery, graphql } from 'gatsby'

const Main = ({ children }) => {
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
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}

export default Main