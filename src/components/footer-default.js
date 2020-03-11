import { Link } from "gatsby"
import React from "react"
import footerStyles from "../components/footer.module.css"
import 'lazysizes' 

// query StaticMapQuery `{
//     staticMap {
//         childFile {
//             childImageSharp {
//                 ...GatsbyImageSharpFluid
//             }
//         }
//     }
// }`

const Footer = () => {
    return (
        <footer>
            <div className={footerStyles.footerInfo} >
                {/* contact us form */}
                <div className={footerStyles.contactForm} id="contact-form">
                    <h3>Contact Us</h3>
                    <form method="POST" data-netlify="true" name="contact" netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact" />
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="c-name" placeholder="John Doe" required/>

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="c-email" placeholder="john@example.com" required/>

                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="c-message"  rows="10" placeholder="Leave your message here" required></textarea>
                        <div data-netlify-recaptcha="true"></div>
                        <input type="submit" value="Submit" className="btn"/>
                       
                    </form>
                    {/* google maps */}
                </div>
                
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

export default Footer