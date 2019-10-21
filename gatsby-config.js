let contentfulConfig


try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require('./.contentful')
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || "gpkrfkvq2nnl",
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || "r6_JHHYpicYD6HQ6B-yLL07xUhNvo5VvRL9JcQ-nHds",
}



const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}




module.exports = {
  pathPrefix: `/mini-gatsbyv2-material-kit-react`,
  siteMetadata: {
    title: 'Matrixblend Media',
    titleTemplate: "%s . Matrixblend",
    description: `Media that influence, insight, ideas, and inspiration.`,
    author: `@_joshhead_`,
    url: "https://www.matrixblendmedia.com", // No trailing slash allowed!
    image: "/images/icon.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@matrixblend",
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sharp',
    {
     resolve: 'gatsby-source-contentful',
     options: contentfulConfig,
   },{
     resolve: `gatsby-plugin-google-analytics`,
     options: {
       // replace "UA-XXXXXXXXX-X" with your own Tracking ID
       trackingId: "UA-144805370-1",
     },
    },
    'gatsby-plugin-material-ui',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/img/favicon.png', // This path is relative to the root of the site.
      },
    },
  ],
}