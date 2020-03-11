require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'bramFischer Shopping Centre',
    description: '',
    author: 'Netwater Properties PTY (Ltd)',
    siteUrl: `https://www.bramfischercentre.co.za`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-transition-link`,
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