import { Link } from "gatsby"
import React from "react"
import footerStyles from "../components/footer.module.css"

const Footer = () => {
    return (
        <footer>
            <div className={footerStyles.footerInfo} >
                {/* contact us form */}
                <div className={footerStyles.contactForm} id="contact-form">
                    <h3>Contact Us</h3>
                    <form action="">
                        
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="c-name" placeholder="John Doe" required/>

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="c-email" placeholder="john@example.com" required/>

                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="c-message"  rows="10" placeholder="Leave your message here" required></textarea>

                        <input type="submit" value="Submit" className="btn"/>
                    </form>
                    {/* google maps */}
                </div>
                
                <div className={footerStyles.map} id="map">
                
                </div>
            </div>
            {/* copyright info and extra links */}
            <div className={footerStyles.footerNav}>
                <small>
                Copyright All Rights Reserved Netwater Properties PTY (Ltd).
                </small>
                <nav>
                    <small><Link to="privacy-policy" className="wht">Privacy Policy</Link></small>
                    <small><Link to="terms-conditions" className="wht">Terms and Conditions</Link></small>
                </nav>
            </div>
        </footer>
    )
}

export default Footer