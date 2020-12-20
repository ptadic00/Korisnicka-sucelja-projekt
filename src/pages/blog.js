import React from "react"
import { graphql, Link } from "gatsby"
import NavigationHeader from "../components/NavigationHeader"
import Footer from "../components/Footer"


export default function Blog({ data }) {
  const { posts } = data.blog
  
  return (
    <div>
    <NavigationHeader/>
    <img alt="blogIndex.jpg" src={data.image.publicURL} />
    <h1>Blog</h1>
    <h2>Dobrodošli na naš blog! Ovdje ćemo zapisivati naše doživljaje s gaža i koncerata.</h2>
    {posts.map(post => (
        <article key={post.id}>
          <Link to={post.fields.slug}>
            <h2>{post.frontmatter.title}</h2>
          </Link>
          <small>
            {post.frontmatter.author}, {post.frontmatter.date}
          </small>
          <p>{post.excerpt}</p>
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