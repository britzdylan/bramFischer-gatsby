import { Link } from "gatsby"
import React from "react"
import footerStyles from "../components/footer.module.css"
import 'lazysizes' 


const FooterLease = () => {
    return (
        <footer>
            <div className={footerStyles.footerInfo} >
                    {/* google maps */}
                    <div className={footerStyles.map} id="map">
                    <a href="https://www.google.co.za/maps/place/Bram+Fischer+Shopping+Centre/@-26.1112008,27.9991991,17z/data=!4m5!3m4!1s0x1e95754c62f41317:0x19f3e39ae4a9722!8m2!3d-26.11109!4d28.00039" target="_blank" rel="noopener noreferrer">
                    <picture>
                        <source data-srcset="../../map.webp" type="image/webp"/>
                        <source data-srcset="../../map.jpg" type="image/jpg" className="lazyload"/> 
                        <img data-src="../../map.jpg" alt="bramFischer location" className="lazyload"/>
                   </picture>
                    </a>
                    </div>
                </div>
                
                
            {/* copyright info and extra links */}
            <div className={footerStyles.footerNav}>
                <small>
                Copyright All Rights Reserved Netwater Properties PTY (Ltd).
                </small>
                <nav>
                    <small><Link to="privacy-policy" className={footerStyles.links}>Privacy Policy</Link></small>
                    <small><Link to="terms-conditions" className={footerStyles.links}>Terms and Conditions</Link></small>
                </nav>
            </div>
        </footer>
    )
}

export default FooterLease