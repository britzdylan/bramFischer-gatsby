import React from "react"
// import Link from 'gatsby-link'
import LayoutLease from '../components/layout-lease'
import leaseStyles from '../components/leaseStyles.module.css'


const lease = () => {
     const name = "Lease from us";
    return (
        
        <LayoutLease name={name}>
            <main className="content">
                <div className={leaseStyles.container}>
                    <div className={leaseStyles.contactForm} id="contact-form">
                            <h3>Lease Request Form</h3>
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
                        <div className={leaseStyles.text}>
                            <h2>How it Works</h2>
                            <p>If you are interested in shop/office space kindly contact Centre Management.

Procedure for application to lease:
•Set up a meeting with the Leasing Administrator to view the space.
•If you are interested you need to have the following ready:

 Completed Application Form
 Individual Capacity
 Company
 Business Plan
 Financial Statements
 Fica Documents
 Application to be sent to Landlord for approval.
2 Months Deposits</p>
                        </div>
                </div>
                
            </main>
        </LayoutLease>
        
    )

}

export default lease