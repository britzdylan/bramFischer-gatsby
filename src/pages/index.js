import React from "react"
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
                        <img data-src="../../wheelchair.svg" alt="bramfischer shopping centre is wheelchair accessible" className={`lazyload ${indexStyles.img}`} height="70px" width="70px" />
                        <p>Wheelchair Friendly Shopping</p>
                    </li>
                    <li className="mid">
                        <img data-src="../../parking.svg" alt="bramfischer shopping centre has lots of parking" className={`lazyload ${indexStyles.img}`} height="70px" width="70px" />
                        <p>Shaded Parking</p>
                    </li>
                    <li className="mid">
                        <img data-src="../../bins.svg" alt="bramfischer shopping centre recycles all our garbage" className={`lazyload ${indexStyles.img}`} height="70px" width="70px" />
                        <p>Eco Friendly Bins</p>
                    </li>
                    <li className="mid">
                        <img data-src="../../generator.svg" alt="bramfischer shopping centre has our very own generators" className={`lazyload ${indexStyles.img}`} height="70px" width="70px" />
                        <p>Generators - No Loadshedding Here!</p>
                    </li>
                    <li className="mid">
                        <img data-src="../../atm.svg" alt="bramfischer shopping centre has an atm for each of South Africa's major banks" className={`lazyload ${indexStyles.img}`} height="70px" width="70px" />
                        <p>All Major ATM's</p>
                    </li>
                    <li className="mid">
                        <img data-src="../../cart.svg" alt="bramfischer shopping centre is a convenient shopping experience" className={`${indexStyles.img} lazyload`} height="70px" width="70px" />
                        <p>Convenient Shopping Experience</p>
                    </li>
                </ul>
                <div className={indexStyles.lease}>
                    <div>
                        <h4 className="">Need to setup your store? Get in touch with us today!</h4>
                        <AniLink paintDrip hex="#94DD83" to="/lease" className="btn btn-alt">Lease from us</AniLink>
                    </div>
                    <img className={`${indexStyles.ctaImage} lazyload`} data-src="../../cta.png" alt="lease from us" />
                </div>
            </main>

        </LayoutHome>

    )
}


export default indexPage