import React from "react"
import { graphql, Link } from "gatsby"
import NavigationHeader from "../components/NavigationHeader"
import Footer from "../components/Footer"
import styles from '../../src/components/blogIndex/style.module.css'

export default function Blog({ data }) {
  const { posts } = data.blog
  
  return (
    <div>
      <NavigationHeader/>
      <img className={styles.slika} alt="slika" src={data.image.publicURL}/>
      <h1>Blog</h1>
      <h2 className={styles.subtitle}>Dobrodošli na naš blog! Ovdje ćemo zapisivati naše doživljaje s gaža i koncerata.</h2>
      {posts.map(post => (
        <article key={post.id}>
          <Link to={post.fields.slug}>
            <h2 className={styles.title}>{post.frontmatter.title}</h2>
          </Link>
          <small className={styles.small}>
            {post.frontmatter.author}, {post.frontmatter.date}
          </small>
          <p className={styles.excerpt}>{post.excerpt}</p>
        </article>
      ))}
      <Footer/>
    </div>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
      
    }
    image: file(base: { eq: "blogIndex.jpg" }) {
      publicURL
    }
  }
`