import React from 'react'
import Header from '../components/header'
import FooterLease from '../components/footer-lease'
import './normalize.css'
import './layout.css'

const LayoutLease = (props) => {
    return (
        <div>
            <Header name={props.name}/>
            {props.children}
            <FooterLease />
        </div>
        

    )
}

export default LayoutLease