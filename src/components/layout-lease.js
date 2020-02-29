import React from 'react'
import Header from '../components/header'
import FooterLease from '../components/footer-lease'
import './normalize.css'
import './layout.css'

const LayoutDefault = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <FooterLease />
        </div>
        

    )
}

export default LayoutDefault