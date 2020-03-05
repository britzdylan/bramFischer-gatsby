exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(
      `
        {
          shops: allStrapiShop {
            edges {
              node {
                strapiId
              }
            }
          }
          categories: allStrapiCategorie {
            edges {
              node {
                strapiId
              }
            }
          }
        }
      `
    )
  
    if (result.errors) {
      throw result.errors
    }
  
    // Create blog articles pages.
    const shops = result.data.shops.edges
    const categories = result.data.categories.edges
  
    shops.forEach((shop, index) => {
      createPage({
        path: `/shop/${shop.node.strapiId}`,
        component: require.resolve("./src/templates/shop.js"),
        context: {
          id: shop.node.strapiId,
        },
      })
    })
  
    categories.forEach((category, index) => {
      createPage({
        path: `/category/${category.node.strapiId}`,
        component: require.resolve("./src/templates/category.js"),
        context: {
          id: category.node.strapiId,
        },
      })
    })
  }