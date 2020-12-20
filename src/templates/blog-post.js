import React from "react"
import { graphql } from "gatsby"
import styles from "./style.module.css"
import NavigationHeader from "../components/NavigationHeader"
import Footer from "../components/Footer"

export default function BlogPost({ data }) {
  const post = data.markdownRemark


  return (
    <div>
      <NavigationHeader/>
      <h1>{post.frontmatter.title}</h1>
      <small>
            {post.frontmatter.author}, {post.frontmatter.date}
          </small>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.html }} />
          <Footer/>
          </div>
  )
}

export const query = graphql`
  query BlogQuery($slug: String!) { 
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(fromNow: true)
        title
        author  
      }
    }
  }
`