import React, { Component } from 'react'
import ProductLaptopList from './ProductLaptopList'

export default class ProductLaptop extends Component {
    render() {
        return (
            <div>
                <section id="laptop" class="container-fluid pt-5 pb-5 bg-light text-dark">
                    <h1 class="text-center">BEST LAPTOP</h1>
                    <div className="row">
                        <ProductLaptopList />
                        <ProductLaptopList />
                        <ProductLaptopList />
                        <ProductLaptopList />
                    </div>

                </section>
            </div>
        )
    }
}
