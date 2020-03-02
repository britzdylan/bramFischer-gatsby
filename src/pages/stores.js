import React from "react"
import Link from 'gatsby-link'
import Layout from '../components/layout-default'
import storesStyles from '../components/storesStyles.module.css'


const stores = () => {
    const name = "Browse our Stores";
    return (
        <Layout name={name}>
            <main className="content" >
                <div className={storesStyles.listing}>
                    <div className={storesStyles.container}>
                        <div className={storesStyles.img}>
                            <h2>Checkers</h2>
                        </div>
                        <div className={storesStyles.meta}>
                            <small>Open Now</small>
                            <Link to="/" className="btn">More Info</Link>
                        </div>
                    </div>
                </div> 
            </main>
        </Layout>
        
    )

}

export default stores