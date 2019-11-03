import {useStaticQuery, graphql} from "react"


export const useData = () =>{
  const data = useStaticQuery(graphql`
  query Data{
    site {
      siteMetadata
      {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            description
          }
        }
      }
    }
  }
  
  `)
  return data.formatter
}