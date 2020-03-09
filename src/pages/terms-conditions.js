import React from "react"
// import Link from 'gatsby-link'
import Layout from '../components/layout-default'
import ReactMarkdown from 'react-markdown'

 export const query = graphql`
 query termsContent {
    strapiPrivacyPolicy(strapiId: {eq: 3}) {
        content
        name
      }
   }
 `

const terms = ({ data }) => {
    const name = "Terms and Conditions";
    return (
        <Layout name={name}>
            <main className="content">
            <ReactMarkdown source={data.strapiPrivacyPolicy.content} />
            </main>
        </Layout>
        
    )

}

export default terms