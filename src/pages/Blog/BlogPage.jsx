import React from "react";
// import get from 'lodash/get';


class BlogPage extends React.Component {
  
  render() {
    
  
    return (
      
     <div><h1>Blog Page</h1></div>
    )
  }
}

export default BlogPage;

export const pageQuery = graphql`
query {
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

`
