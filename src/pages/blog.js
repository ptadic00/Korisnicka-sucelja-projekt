import React from "react"
import { graphql } from "gatsby"
import NavigationHeader from "../components/NavigationHeader"
import Footer from "../components/Footer"


export default function Home({ data }) {

  return (
    <div>
    <NavigationHeader/>
    <img alt="blogIndex.jpg" src={data.image.publicURL} />
    <h1>Blog</h1>
    <h2>Dobrodošli na naš blog! Ovdje ćemo zapisivati naše doživljaje s gaža i koncerata.</h2>
    <Footer/>
    </div>
  )
}

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    image: file(base: { eq: "blogIndex.jpg" }) {
        publicURL
    }
  }
`