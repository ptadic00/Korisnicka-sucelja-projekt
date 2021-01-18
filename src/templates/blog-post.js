import React from "react"
import { graphql } from "gatsby"
import styles from "./style.module.css"
import NavigationHeader from "../components/NavigationHeader"
import Footer from "../components/Footer"

import { Bounce } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

export default function BlogPost({ data }) {
  const post = data.markdownRemark


  return (
    <div>
      <NavigationHeader/>
      <style>{'body { background-color: black; }'}</style>
      <Bounce triggerOnce={true}>
        <h1 className={styles.blogpost_title}>{post.frontmatter.title}</h1>
      </Bounce>
      <Fade triggerOnce={true}>
        <small className={styles.blogpost_author}>
            {post.frontmatter.author}, {post.frontmatter.date}
          </small>
      </Fade>
      <Slide triggerOnce={true}>
          <div className={styles.blogpost_content} dangerouslySetInnerHTML={{ __html: post.html }} />
      </Slide>
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