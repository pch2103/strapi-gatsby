import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"
import classes from './index.module.scss'

const IndexPage = ({ data }) => {
  const articles = data.allStrapiArticle.edges
  return (
    <Layout>
      <SEO title="Home"/>
      <h1>Now go build something great.</h1>
      <ul className={classes.main}>
        {articles.map(article => (
          <li key={article.node.id} >
            <h2>
                {article.node.title}
            </h2>
            <Image fixed={article.node.image.childImageSharp.fixed}/>
            <ReactMarkdown
              source={article.node.content.substring(0,300).concat('...')}
            />
            <Link to={`/${article.node.id}`}>
              Read more
            </Link>
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

