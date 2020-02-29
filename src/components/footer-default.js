import { Link } from "gatsby"
import React from "react"

const Footer = () => {
    return (
        <footer>
            <div className="footer-info" >
                <div className="contact-us" id="contact-form">
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
                </div>
                
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

export default Footer