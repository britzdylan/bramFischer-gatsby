import React from "react"
import Link from 'gatsby-link'
import LayoutDefault from '../components/layout-default'
import indexStyles from '../components/index.module.css'


const indexPage = () => {
    return (
        <LayoutDefault >
             <main className="content">
                    <h2 className={indexStyles.h2}>A little bit about us</h2>
                        <ul className={indexStyles.about}>
                            <li className="mid">
                                <img src="../../wheelchair.svg" alt="" className={indexStyles.img} height="70px" width="70px"/>
                                <p>Wheelchair Friendly Shopping</p>
                            </li>
                            <li className="mid">
                                <img src="../../parking.svg" alt="" className={indexStyles.img} height="70px" width="70px" />
                                <p>Shaded Parking</p>
                            </li>
                            <li className="mid">
                                <img src="../../bins.svg" alt="" className={indexStyles.img} height="70px" width="70px"/>
                                <p>Eco Friendly Bins</p>
                            </li>
                            <li className="mid">
                                <img src="../../generator.svg" alt="" className={indexStyles.img} height="70px" width="70px"/>
                                <p>Generators - No Loadshedding Here!</p>
                            </li>
                            <li className="mid">
                                <img src="../../atm.svg" alt=""  className={indexStyles.img} height="70px" width="70px"/>
                                <p>All Major ATM's</p>
                            </li>
                            <li className="mid">
                                <img src="../../cart.svg" alt="" className={indexStyles.img} height="70px" width="70px"/>
                                <p>Convenient Shopping Experience</p>
                            </li>
                        </ul>
                <div className={indexStyles.lease}>
                    <h4 className="wht">Need to setup your store? Get in touch with us today!</h4>
                    <Link to="/lease" className="btn btn-alt">Lease from us</Link>
                </div>
            </main>

        </LayoutDefault>
       
    )
}


export default indexPage