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

                {data.allStrapiShop.nodes.map(document => (
                    <div key={document.id} className={storesStyles.container}>
                        <div className={storesStyles.img}>
                            {/* <img src={`https://netwater-cms.herokuapp.com/upload/files/${document.banner.id}`} width="50px" /> */}
                            <h4 className="wht">{document.name}</h4>
                        </div>
                        <div className={storesStyles.meta}>
                            <small>{document.categories[0].name}</small>
                            <Link to={`/${document.id}`} className="btn">More Info</Link>
                        </div>
                    </div>
                ))}

                </div> 
            </main>
        </Layout>
        
    )

                    

}

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiShop(sort: {order: ASC, fields: name}) {
        nodes {
          name
          id
          strapiId
          banner {
            id
          }
          categories {
            name
          }
        }
      }
    }
`

export default stores




