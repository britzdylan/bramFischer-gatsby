module.exports = {
  siteMetadata: {
    title: 'bramFischer Shopping Centre',
    description: '',
    author: 'Netwater Properties PTY (Ltd)'
  },
  plugins: [
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'https://netwater-cms.herokuapp.com',
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'shop',
          'categorie'
        ],
        queryLimit: 1000,
      },
    }
  ],
}