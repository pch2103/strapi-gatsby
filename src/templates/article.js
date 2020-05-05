import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"

const ArticleTemplate = ({ data }) => (

  <Layout>
    <Link to={`/`}>
      {'<'} Go to Home
    </Link>
    <h1>{data.strapiArticle.title}</h1>
    { data.strapiArticle.author &&
    <p>
      by{" "}
      <Link to={`/authors/User_${data.strapiArticle.author.id}`}>
        {data.strapiArticle.author.username}
      </Link>
    </p>
    }
    <Img fluid={data.strapiArticle.image.childImageSharp.fluid} />
    <ReactMarkdown source={data.strapiArticle.content}/>
  </Layout>
)
export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      content
      image {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      author {
        id
        username
      }
    }
  }
`