import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout-default'
import storesStyles from '../components/storesStyles.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink"

// 

const activeStyles = {
  color: 'green',
  fontWeight: '700'
}
const name = "Browse our Stores";

const stores = ({ data }) => {
  return (
    <Layout name={name}>
      <StaticQuery
        query={graphql`
          query {
            allStrapiShop(sort: {order: ASC, fields: name}) {
              edges {
                node {
                  name
                  strapiId
                  logo {
                    childImageSharp {
                      fixed(width: 150, height: 150) {
                        ...GatsbyImageSharpFixed_withWebp
                      }
                      
                    }
                  }
                }
              }
            }
            allStrapiCategorie {
              edges {
                node {
                  name
                  strapiId
                }
              }
            }
          }
        `}
        render={data =>  (
  
          <main className="content" >
          <div className={storesStyles.filterContainer} >
              <div className={storesStyles.filterSelector} id="filterSelector">
                <p className={storesStyles.activeFilter}>All Stores</p>
              </div>
              <div className={storesStyles.filterOptions} id="dropDown"  >
                <ul className={storesStyles.filterList}>
                    {data.allStrapiCategorie.edges.map((cat, i) => (
                            <li key={cat.node.strapiId} ><AniLink fade duration={0.4} activeStyle={activeStyles} to={`/category/${cat.node.strapiId}`}>{cat.node.name}</AniLink>|</li>
                            ))
                        }
                </ul>
                    
            </div>
          </div>
          <div className={storesStyles.listing}>
              {data.allStrapiShop.edges.map((document, i) => (
                  <div key={document.node.strapiId} className={storesStyles.container}>
                      <div className={storesStyles.img}>
                          <Image fixed={document.node.logo.childImageSharp.fixed} alt={document.node.name} />
                      </div>
                      <div className={storesStyles.meta}>
                          <p className={storesStyles.h5}>{document.node.name}</p>
                          <AniLink paintDrip hex="#94DD83"to={`/shop/${document.node.strapiId}`}  className="btn btn-alt">More Info</AniLink>
                      </div>
                  </div>
                ))}
            </div> 
          </main>
        )}
      />
    </Layout>
  )
} 




export default stores




