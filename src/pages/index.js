import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  const images = data.allCustomNode.nodes;

  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <h3>Here's your list of nodes and their images</h3>
      <ul>
        {images.map(i => (
          <li key={i.url1}>
            <ul>
              <li key={i.url1}>
                {i.url1}
                <br/>
                {JSON.stringify(i.img1)}
              </li>
              <li key={i.url2}>
                {i.url2}
                <br/>
                {JSON.stringify(i.img2)}
              </li>
            </ul>
          </li>
        ))}
      </ul>   
    </Layout>
  )
}

export const query = graphql`
  query {
    allCustomNode {
      nodes {
        url1
        img1 {
          absolutePath
        }
        url2
        img2 {
          absolutePath
        }
      }
    }
  }
`

export default IndexPage
