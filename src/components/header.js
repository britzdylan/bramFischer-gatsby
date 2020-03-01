import React from 'react'
import Link from 'gatsby-link'
import headerStyles from './header.module.css'



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
                <h1 className={headerStyles.brand}><Link to="/">bramFischer</Link></h1>
                <ul className={headerStyles.mainMenu}>
                    <li>
                        <Link to="/stores" >Store Directory</Link>
                    </li>
                    <li>
                        <Link to="/contact-us" >Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/lease" >Lease from us</Link>
                    </li>
                </ul>
            </nav>

            {/* Page header */}

            <div className={headerStyles.header} >
                <h1 className="wht">Hello Randburg, Welcome to Bram Fischer Centre, Your one stop convenient shopping experience.</h1>
                <Link to="/stores" className="btn btn-alt">Browse our Stores</Link>
            </div>


            {/* bottom mobile navigation */}
            <nav className={headerStyles.bottom}>
                <ul className={headerStyles.mobileMenu}>
                    <li>
                        
                        <Link to="/stores" ><img src="../../cart.svg" alt="" className={headerStyles.mobileIcon} height="25px" width="25px"/>Stores</Link>
                    </li>
                    <li>
                        
                        <Link to="/contact-us" ><img src="../../atm.svg" alt="" className={headerStyles.mobileIcon} height="25px" width="25px"/>Contact</Link>
                    </li>
                    <li>
                        
                        <Link to="/lease" ><img src="../../parking.svg" alt="" className={headerStyles.mobileIcon} height="25px" width="25px" />Lease</Link>
                    </li>
                    <li>
                        
                        <Link to="" ><div className={headerStyles.circle}></div><div className={headerStyles.circle}></div><div className={headerStyles.circle}></div></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header