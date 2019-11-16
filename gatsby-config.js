let contentfulConfig
let twilioConfig
let googleConfig


try {
  // Load Google Config
  googleConfig = require('./.google')
  
} catch(_) {}



try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require('./.contentful')
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || "gpkrfkvq2nnl",
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || "r6_JHHYpicYD6HQ6B-yLL07xUhNvo5VvRL9JcQ-nHds",
}

try {
  // Load Twilio config from the .twilio.json
  twilioConfig = require('./.twilio')
} catch (_){}

// Overwrite the Twilio config with the enviroment variables if they exist
twilioConfig = {
  accoutId: process.env.TWILIO_SPACE_ID || "AC01187175257f53f1f4d04f23a95c11b9",
  auth: process.env.TWILIO_AUTH_TOKEN || "e1004651ae7305b155e7826df4900edd",
}


const { spaceId, accessToken } = contentfulConfig
const { accoutId, auth} = twilioConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}

if (!accoutId || !auth) {
  throw new Error(
    'Twilio accountId and the Auth token need to be provided.'
  )
}



module.exports = {
  pathPrefix: `/matrixblendmedia`,
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
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sharp',
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: googleConfig.tagId,
  
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
  
        // Specify optional GTM environment details.
        gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },
    {
     resolve: 'gatsby-source-contentful',
     options: contentfulConfig,
   },{
     resolve: `gatsby-plugin-google-analytics`,
     options: {
       // replace "UA-XXXXXXXXX-X" with your own Tracking ID
       trackingId: googleConfig.analytics.trackingId,
     },
    },{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/assets/blogs/`,
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
        display: 'Material-ui',
        icon: 'src/assets/img/favicon.png', // This path is relative to the root of the site.
      },
    },
  ],
}