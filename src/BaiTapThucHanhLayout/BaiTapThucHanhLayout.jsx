import React, { Component } from 'react'
import Header from './Header'
import './BaiTapThucHanhLayout.css'
import Body from './Body'
import Footer from './Footer'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                {/* HEADER  */}
                <Header />
                
                {/* BODY */}
                <Body/>
               
                {/* FOOTER */}
                <Footer/>
            </div>



        )
    }
}
