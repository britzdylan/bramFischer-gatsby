import React from 'react'
import Header from './home-header'
import Footer from './footer-default'
import './normalize.css'
import './layout.css'

const LayoutHome = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
        

    )
}

export default LayoutHome