import React from 'react'
import Layout from '../components/layout-default'
import Link from 'gatsby-link'
import Image from 'gatsby-image'
import 'lazysizes' 

import shopStyles from '../components/shopStyles.module.css'

export const query = graphql`
query singleShop($id: Int!) {
    strapiShop(strapiId: {eq: $id}) {
      email
      contact
      description
      logo {
        childImageSharp {
            fixed(width: 200, height: 200) {
                ...GatsbyImageSharpFixed_withWebp
            }
        }
      }
      strapiId
      published
      website
      times {
        friday
        monday
        saturday
        sunday
        tuesday
        thursday
        tuesday
        wednesday
      }
      media {
        name
        id
        url
      }
      name
    }
  }
`


const shop = ({ data }) => {
    const shop = data.strapiShop;
    return (
        <Layout name={shop.name} >
            <div className={shopStyles.grid}>
                <aside className={shopStyles.sidebar}>
                    <div className={shopStyles.profilePic}>
                        <Image fixed={shop.logo.childImageSharp.fixed} alt={shop.name} />
                    </div>
                        <div className={shopStyles.detailsContainer}>
                            <div className={shopStyles.details}>
                                <h3>Contact Details</h3>
                                    <div className={shopStyles.div}>
                                        <span className={shopStyles.contact}> 
                                            <img src="../../email.svg" alt="" height="15px" width="15px" className="lazyload" />
                                            <small><a href={`mailto:${shop.email ? shop.email : '-'}`}>{shop.email ? shop.email : '-'}</a></small> 
                                        </span>
                                        <span className={shopStyles.contact}> 
                                            <img src="../../telephone.svg" alt="" height="15px" width="15px"  className="lazyload" />
                                            <small><a href={`tel:0${shop.contact ? shop.contact : '-'}`}>0{shop.contact ? shop.contact : '-'}</a></small> 
                                        </span>
                                        <span className={shopStyles.contact}> 
                                            <img src="../../website.svg" alt="" height="15px" width="15px" className="lazyload" />
                                            <small><a target="_blank" rel="noopener noreferrer" href={shop.website ? shop.website : '-'}>{shop.website ? shop.website : '-'}</a></small> 
                                        </span>
                                    </div>
                                    <h4>Times</h4>
                                        <div>
                                            <span className={shopStyles.times}>
                                                <p>Mon:</p>
                                                <p>{shop.times.monday ? shop.times.monday : '-'}</p>
                                            </span>
                                            <hr/>
                                            <span className={shopStyles.times}>
                                                <p>Tues:</p>
                                                <p>{shop.times.tuesday ? shop.times.tuesday : '-'}</p>
                                            </span>
                                            <hr/>
                                            <span className={shopStyles.times}>
                                                <p>Wed:</p>
                                                <p>{shop.times.wednesday ? shop.times.wednesday : '-'}</p>
                                            </span>
                                            <hr/>
                                            <span className={shopStyles.times}>
                                                <p>Thu:</p>
                                                <p>{shop.times.thursday ? shop.times.thursday : '-'}</p>
                                            </span>
                                            <hr/>
                                            <span className={shopStyles.times}>
                                                <p>Fri:</p>
                                                <p>{shop.times.friday ? shop.times.friday : '-'}</p>
                                            </span>
                                            <hr/>
                                            <span className={shopStyles.times}>
                                                <p>Sat:</p>
                                                <p>{shop.times.saturday ? shop.times.saturday : '-'}</p>
                                            </span>
                                            <hr/>
                                            <span className={shopStyles.times}>
                                                <p>Sun:</p>
                                                <p>{shop.times.sunday ? shop.times.sunday : '-'}</p>
                                            </span>
                                            <hr/>
                                        </div>
                            </div>
                                        
                    </div>
                </aside>
                <main className={shopStyles.main}>
                    <div className={shopStyles.about}>
                        <h2>About {shop.name}</h2>
                        <article>{shop.description}</article>
                    </div>
                    <div className={shopStyles.media}>
                        {
                                shop.media.map((data, i) => (
                                <div className={shopStyles.gridItem} key={data.id} >
                                    <img data-src={data.url} className="lazyload"  alt={data.name} max-height="250px" max-width="250px" />
                                </div>                                  
                         ))}
                        
                    </div>
                </main>
            </div>
        </Layout>
        
    )

}

export default shop