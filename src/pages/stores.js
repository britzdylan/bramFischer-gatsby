import React from "react"
import {Link, graphql } from 'gatsby'
import Layout from '../components/layout-default'
import storesStyles from '../components/storesStyles.module.css'


const stores = ({ data }) => {
    const name = "Browse our Stores";
    return (
        <Layout name={name}>
            <main className="content" >
                <div className={storesStyles.listing}>

                {data.allStrapiShop.edges.map((document, i) => (
                    <div key={document.node.strapiId} className={storesStyles.container}>
                        <div className={storesStyles.img}>
                            {/* <img src={document.node.logo.publicURL} width="50px" height="50px" alt={document.node.name} /> */}
                            {console.log(document.node.logo.publicURL)}
                            <h4 className="wht">{document.node.name}</h4>
                        </div>
                        <div className={storesStyles.meta}>
                            <small>{document.node.name}</small>
                            <Link to={`/${document.node.id}`} className="btn">More Info</Link>
                        </div>
                    </div>
                ))}

                </div> 
            </main>
        </Layout>
        
    )

                    

}

export const pageQuery = graphql`  
query MyQuery {
  allStrapiShop {
    edges {
      node {
        name
        strapiId
        logo {
          publicURL
        }
      }
    }
  }
}
`

export default stores




