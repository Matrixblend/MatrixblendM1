import React from "react"
import Helmet from "react-helmet"
import get from "lodash/get"
import Img from "gatsby-image"

// import heroStyles from '../components/hero.module.css'

class BlogPostTemplate extends React.Component {
  

  render() {
    const post = get(this.props, "data.contentfulBlogPost")
    const siteTitle = get(this.props, "data.site.siteMetadata.title")

    return (
      <div style={{ background: "#fff" }}>
        {/* <Helmet title={`${post.title} | ${siteTitle}`} /> */}
        <div>
         
         <h1>Test</h1>
        </div>
      </div>
    )
  }
}

export default BlogPostTemplate

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     contentfulBlogPost(slug: { eq: $slug }) {
//       title
//       publishDate(formatString: "MMMM Do, YYYY")
//       heroImage {
//         sizes(maxWidth: 1180, background: "rgb:000000") {
//           ...GatsbyContentfulSizes_withWebp
//         }
//       }
//       body {
//         childMarkdownRemark {
//           html
//         }
//       }
//     }
//   }
// `
