import { useStaticQuery, graphql } from "gatsby"
export const useThisdata = () => {
  const { AllData } = useStaticQuery(
    graphql`
      query AllData {
        allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
          edges {
            node {
              excerpt
              html
              rawMarkdownBody
            }
          }
        }
        site {
          siteMetadata {
            title
          }
        }
        allContentfulBlogPost {
          nodes {
            heroImage {
              id
            }
            tags
            slug
          }
        }
      }
    `
  )
  return AllData
}
