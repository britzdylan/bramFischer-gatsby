import React from 'react'
import headerStyles from './header.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink"



const Header = () => { //main home page header 
    return (
        <header> 

            {/* top bar with contact information */}
            <div className={headerStyles.top} > 
                <small><a href="mailto:info@netwater.co.za" className={headerStyles.email}>info@netwater.co.za</a></small>
                <small><a href="tel:013261614" id="cell" className={headerStyles.cell}>011 326 1614</a></small>
            </div>

            {/* main navigation for desktops & tablets */}
            <nav className={headerStyles.nav} >
            <AniLink  cover bg="#94DD83" to="/"><img src='../../bramfischer.svg' width="250px" alt="bramFischer Centre"/></AniLink>
                <ul className={headerStyles.mainMenu}>
                    <li>
                        <AniLink cover bg="#94DD83"  to="/stores" >Store Directory</AniLink >
                    </li>
                    <li>
                        <AniLink cover  bg="#94DD83" to="/contact" >Contact Us</AniLink>
                    </li>
                    <li>
                        <AniLink cover  bg="#94DD83" to="/lease" >Lease from us</AniLink >
                    </li>
                </ul>
            </nav>
            
            {/* Page header */}

            <div className={headerStyles.header} >
                
                <h1 className="">Your one stop convenient shopping experience.</h1>
                <AniLink paintDrip  hex="#94DD83" to="/stores" className="btn">Browse our Stores</AniLink>

            </div>


            {/* bottom mobile navigation */}
            <nav className={headerStyles.bottom}>
                <ul className={headerStyles.mobileMenu}>
                    <li>
                        
                        <AniLink cover  bg="#94DD83" to="/stores" ><img src="../../cart.svg" alt="" className={headerStyles.mobileIcon} height="25px" width="25px"/>Stores</AniLink>
                    </li>
                    <li>
                        
                        <AniLink cover  bg="#94DD83" to="/contact-us" ><img src="../../atm.svg" alt="" className={headerStyles.mobileIcon} height="25px" width="25px"/>Contact</AniLink>
                    </li>
                    <li>
                        
                        <AniLink cover  bg="#94DD83" to="/lease" ><img src="../../parking.svg" alt="" className={headerStyles.mobileIcon} height="25px" width="25px" />Lease</AniLink>
                    </li>
                    <li>
                        
                        <AniLink cover  bg="#94DD83" to="" ><div className={headerStyles.circle}></div><div className={headerStyles.circle}></div><div className={headerStyles.circle}></div></AniLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header