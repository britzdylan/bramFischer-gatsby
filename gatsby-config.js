require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'bramFischer Shopping Centre',
    description: '',
    author: 'Netwater Properties PTY (Ltd)'
  },
  plugins: [
    "gatsby-plugin-react-helmet",
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
          'categorie'
        ],
        queryLimit: 1000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
}