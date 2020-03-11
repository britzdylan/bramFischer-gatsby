import React from "react"
import {graphql} from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout-default'
import storesStyles from '../components/storesStyles.module.css'
import { IoMdClose } from "react-icons/io";
import AniLink from "gatsby-plugin-transition-link/AniLink"
const activeStyles = {
  fontSize: '700',
  color: 'green'
}

export const query = graphql`
    query Category($id: Int!){
        allStrapiShop(filter: {categories: {elemMatch: {id: {eq: $id}}}}, sort: {fields: name, order: ASC}) {
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
        strapiCategorie(strapiId: {eq: $id}) {
            name
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
    `

const Category = ({ data,props }) => {
    return (
        <Layout name={data.strapiCategorie.name}>
              <main className="content" >
              <div className={storesStyles.filterContainer} >
                  <div className={storesStyles.filterSelector} id="filterSelector">
                    <div className={storesStyles.activeFilter}><AniLink fade to="/stores"><IoMdClose className={storesStyles.filterIcon} /></AniLink><p>{data.strapiCategorie.name} Stores</p></div>
                  </div>
                  <div className={storesStyles.filterOptions} id="dropDown"  >
                    <ul className={storesStyles.filterList}>
                        {data.allStrapiCategorie.edges.map((cat, i) => (
                                <li key={cat.node.strapiId} ><AniLink fade activeStyle={activeStyles} to={`./category/${cat.node.strapiId}`}>{cat.node.name}</AniLink>|</li>
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
                              <AniLink paintDrip  hex="#94DD83" to={`/shop/${document.node.strapiId}`}  className="btn btn-alt">More Info</AniLink>
                          </div>
                      </div>
                    ))}
                </div> 
              </main>
        </Layout>
      )

}

export default Category