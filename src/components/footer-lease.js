import { Link } from "gatsby"
import React from "react"

const FooterLease = () => {
    return (
        <footer>
            <div className="footer-info" >
                <div className="google-maps" id="map">
                
                </div>
            </div>
            <div className="footer-nav">
                <small>
                Copyright All Rights Reserved Netwater Properties PTY (Ltd). Design by Blak Studios
                </small>
                <nav>
                    <small><Link to="privacy-policy" className="wht">Privacy Policy</Link></small>
                    <small><Link to="terms-conditions" className="wht">Terms and Conditions</Link></small>
                </nav>
            </div>
        </footer>
    )
}

export default FooterLease