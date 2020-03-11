import React from "react"
import Link from 'gatsby-link'
import LayoutHome from '../components/layout-home'
import indexStyles from '../components/index.module.css'
import 'lazysizes' 
import AniLink from "gatsby-plugin-transition-link/AniLink"

const indexPage = () => {
    return (
        <LayoutHome >
             <main className="content">
                    <h2 className={indexStyles.h2}>A little bit about us</h2>
                        <ul className={indexStyles.about}>
                            <li className="mid">
                                <img data-src="../../wheelchair.svg" alt="" className={indexStyles.img} height="70px" width="70px" className="lazyload"/>
                                <p>Wheelchair Friendly Shopping</p>
                            </li>
                            <li className="mid">
                                <img data-src="../../parking.svg" alt="" className={indexStyles.img} height="70px" width="70px" className="lazyload" />
                                <p>Shaded Parking</p>
                            </li>
                            <li className="mid">
                                <img data-src="../../bins.svg" alt="" className={indexStyles.img} height="70px" width="70px" className="lazyload"/>
                                <p>Eco Friendly Bins</p>
                            </li>
                            <li className="mid">
                                <img data-src="../../generator.svg" alt="" className={indexStyles.img} height="70px" width="70px" className="lazyload"/>
                                <p>Generators - No Loadshedding Here!</p>
                            </li>
                            <li className="mid">
                                <img data-src="../../atm.svg" alt=""  className={indexStyles.img} height="70px" width="70px" className="lazyload" />
                                <p>All Major ATM's</p>
                            </li>
                            <li className="mid">
                                <img data-src="../../cart.svg" alt="" className={indexStyles.img} height="70px" width="70px" className="lazyload"/>
                                <p>Convenient Shopping Experience</p>
                            </li>
                        </ul>
                <div className={indexStyles.lease}>
                    <div>
                    <h4 className="">Need to setup your store? Get in touch with us today!</h4>
                    <AniLink paintDrip hex="#94DD83" to="/lease" className="btn btn-alt">Lease from us</AniLink>
                    </div>
                    <img className={indexStyles.ctaImage} data-src="../../cta.png" alt="" className="lazyload"/>
                </div>
            </main>

        </LayoutHome>
       
    )
}


export default indexPage