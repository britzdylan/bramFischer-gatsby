require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'bramFischer Shopping Centre',
    description: 'Your one stop convenient shopping experience in Randburg',
    author: 'Netwater Properties PTY (Ltd)',
    url: `https://www.bramfischercentre.co.za`,
    image: "/seo.jpg"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-114869782-3",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL:  'https://netwater-cms.herokuapp.com',
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'shop',
          'categorie',
          'privacy-policy'

        ],
        queryLimit: 5000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
        },
        `gatsby-remark-lazy-load`,
      ]
    }
  }
  ],
}