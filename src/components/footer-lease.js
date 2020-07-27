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
                    <iframe title="bramFischer location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d895.6567743805737!2d27.999842829248315!3d-26.11108879473257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95754c62f41317%3A0x19f3e39ae4a9722!2sBram%20Fischer%20Shopping%20Centre!5e0!3m2!1sen!2sza!4v1595842473786!5m2!1sen!2sza" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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
        </footer >
    )
}

export default FooterLease