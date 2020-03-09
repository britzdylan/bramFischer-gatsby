import React from "react"
// import Link from 'gatsby-link'
import Layout from '../components/layout-default'
import ReactMarkdown from 'react-markdown'

 export const query = graphql`
 query privacyContent {
    strapiPrivacyPolicy(strapiId: {eq: 2}) {
        content
        name
      }
   }
 `

const privacy = ({ data }) => {
    const name = "Privacy Policy";
    return (
        <Layout name={name}>
            <main className="content">
                <ReactMarkdown source={data.strapiPrivacyPolicy.content} />
            </main>
        </Layout>
        
    )

}

export default privacy