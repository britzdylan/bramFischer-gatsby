import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer-default'
import './normalize.css'
import './layout.css'

const LayoutDefault = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
        

    )
}

export default LayoutDefault