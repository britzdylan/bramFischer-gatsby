import { Link } from "gatsby"
import React from "react"
import footerStyles from "../components/footer.module.css"
import GoogleMap from "../components/maps.jsx"


const FooterLease = () => {
    return (
        <footer>
            <div className={footerStyles.footerInfo} >
                    {/* google maps */}
                    <div className={footerStyles.map} id="map">
                        <GoogleMap style={{height: '300px'}} />
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