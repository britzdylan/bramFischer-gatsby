import React from 'react'
import Link from 'gatsby-link'
import headerStyles from './header.module.scss'



const Header = () => {
    return (
        <header>
            <div className={headerStyles.topHeader} >
                <small><a href="mailto:info@netwater.co.za" className="">info@netwater.co.za</a></small>
                <small><a href="tel:013261614" className="">011 326 1614</a></small>
            </div>
            <nav className={headerStyles.nav-bar} >
                <h2 className="">bramFischer</h2>
                <ul className="main-menu">
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
            <div className={headerStyles.page-header} >
                <h1 className="wht">Hello Randburg, Welcome to Bram Fischer Centre, Your one stop convenient shopping experience.</h1>
                <Link to="/stores" className="btn btn-alt">Browse our Stores</Link>
            </div>
        </header>
    )
}

export default Header