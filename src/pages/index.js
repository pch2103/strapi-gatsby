import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const articles = data.allStrapiArticle.edges
  return (
    <Layout>
      <SEO title="Home"/>
      <h1>Now go build something great.</h1>
      <ul>
        {articles.map(article => (
          <li key={article.node.id}>
            <h3>
              <Link to={`/${article.node.id}`}>
                {article.node.title}
              </Link>
            </h3>
            <Image fixed={article.node.image.childImageSharp.fixed}/>
            <p>{article.node.content}</p>
          </li>
        ))}
      </ul>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery  {
    allStrapiArticle {
      edges {
        node {
          id
          title
          content
          image {
            childImageSharp {
              fixed(width: 300) {
                 ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`

