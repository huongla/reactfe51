import React, { Component } from 'react'
import Header from './Header'
import Slider from './Slider'
import ProductPhone from './ProductPhone'
import ProductLaptop from './ProductLaptop'
import Footer from './Footer'

export default class BaiTapLayout1 extends Component {
    render() {
        return (
            <div>
                <Header />
                <Slider />
                <ProductPhone />
                <ProductLaptop />
                <Footer />
            </div>
        )
    }
}
