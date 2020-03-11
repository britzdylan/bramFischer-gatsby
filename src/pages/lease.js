import React from "react"
// import Link from 'gatsby-link'
import LayoutLease from '../components/layout-lease'
import leaseStyles from '../components/leaseStyles.module.css'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'

 export const query = graphql`
 query leaseContent {
    strapiPrivacyPolicy(strapiId: {eq: 1}) {
        content
        name
      }
   }
 `


const lease = ({ data }) => {
     const name = "Lease from us";
    return (
        
        <LayoutLease name={name}>
            <main className="content">
                <div className={leaseStyles.container}>
                    <div className={leaseStyles.contactForm} id="contact-form">
                            <h3>Lease Request Form</h3>
                            <form method="POST"  data-netlify="true" name="lease" netlify-honeypot="bot-field">
                                
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="c-name" placeholder="John Doe" required/>

                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="c-email" placeholder="john@example.com" required/>

                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="c-message"  rows="10" placeholder="Leave your message here" required></textarea>

                                <input type="submit" value="Submit" className="btn"/>
                            </form>
                        </div>
                        <div className={leaseStyles.text}>
                            <h2>How it Works</h2>
                            <ReactMarkdown source={data.strapiPrivacyPolicy.content} />
                        </div>
                </div>
                
            </main>
        </LayoutLease>
        
    )

}

export default lease