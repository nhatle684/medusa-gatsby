import { MDXProvider } from "@mdx-js/react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import Expandable from "../components/mdx/expandable"
import Spacing from "../components/mdx/spacing"
import GoogleMap from "../components/mdx/google-map"
import Icon from "../components/mdx/icon"
import SearchEngineOptimization from "../components/utility/seo"

const shortcodes = { Link, Expandable, Spacing, GoogleMap, Icon }

const Mdx = ({ data: { mdx } }) => {
  return (
    <div className="layout-base max-w-screen-md mx-auto my-12">
      <SearchEngineOptimization title={mdx.frontmatter.title} />
      <h1 className="text-4xl mb-3">{mdx.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

export const pageQuery = graphql`
  query MdxQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

export default Mdx
