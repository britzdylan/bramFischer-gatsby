import React from "react"
import {Link, graphql, StaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout-default'
import storesStyles from '../components/storesStyles.module.css'

const name = "Browse our Stores";
const activeStyles = {
  fontSize: '700',
  color: 'green'
}

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
        render={data => (
  
          <main className="content" >
          <div className={storesStyles.filterContainer} >
              <div className={storesStyles.filterSelector} id="filterSelector" onClick={console.log('Hello')}>
                <p>Filter stores:</p>
              </div>
              <div className={storesStyles.filterOptions} id="dropDown"  >
                <li className={storesStyles.filterList}>
                  {data.allStrapiCategorie.edges.map((cat, i) => (
                        <ul key={cat.node.strapiId} ><Link activeStyle={activeStyles} to={`./category/${cat.node.strapiId}`}>{cat.node.name}</Link>|</ul>
                        ))
                      }
                </li>
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
                          <Link to={`/shop/${document.node.strapiId}`}  className="btn btn-alt">More Info</Link>
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




