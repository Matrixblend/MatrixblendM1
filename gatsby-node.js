// const Promise = require('bluebird')
// const path = require('path')
// const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/components/Blog/templates/blogTemplate.jsx`)

  const result = await graphql(`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path @include(if: $path)
        title
      }
    }
  }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      title: node.frontmatter.title,
      date: node.frontmatter.date,
      description: node.frontmatter.description,
      component: blogPostTemplate,
      tags: node.forntmatter.tags,
      html: {}, // additional data can be passed via context
    })
  })
}

// export const pageQuery = graphql`
//   query($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//       }
//     }
//   }
// `


// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

 

//   return new Promise((resolve, reject) => {
//     const blogPost = path.resolve('./src/components/Blog/templates/blogTemplate.jsx')
//     resolve(
//        graphql(
//       `
//       {
//         allContentfulBlogPost {
//           edges {
//             node {
//               id
//               slug
//               title
//             }
//           }
//         }
//       }
      
//           `
//       ).then(result => {
//         if (result.errors) {
//           console.log(result.errors)
//           reject(result.errors)
//         }

//         const posts = result.data.allContentfulBlogPost.edges
//         posts.forEach((post, index) => {
//           createPage({
//             path: `/blog/${post.node.slug}/`,
//             component: blogPost,
//             context: {
//               slug: post.node.slug
//             },
//           })
//         })
//       })
//     )
//   })
// }