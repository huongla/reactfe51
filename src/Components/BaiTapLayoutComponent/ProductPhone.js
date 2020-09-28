import React, { Component } from 'react'
import ProductLaptopList from './ProductLaptopList'
import ProductList from './ProductList'

export default class ProductPhone extends Component {
    render() {
        return (
            // <div>
            //     <section id="smartphone" classname="container-fluid pt-5 pb-5">
            //         <h1 classname="text-white text-center">BEST SMARTPHONE</h1>
            //         <div className="row">
            //         <ProductList />
            //         <ProductList />
            //         <ProductList />
            //         <ProductList />
            //         </div>

            //     </section>
            // </div>

            <div className="container-fluid">
                <h1 classname="text-white text-center">BEST SMARTPHONE</h1>
                <div className="row">
                    <div className="col-3">
                        <ProductList />
                    </div>
                    <div className="col-3">
                        <ProductList />
                    </div>
                    <div className="col-3">
                        <ProductList />
                    </div>
                    <div className="col-3">
                        <ProductList />
                    </div>
                </div>
            </div>
        )
    }
}
