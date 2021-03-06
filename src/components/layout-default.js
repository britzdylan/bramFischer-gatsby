import React from 'react'
import Header from './header'
import Footer from './footer-default'
import './normalize.css'
import './layout.css'

const LayoutDefault = (props) => {
    return (
        <div>
            <Header name={props.name}/>
            {props.children}
            <Footer />
        </div>
        

    )
}

export default LayoutDefault