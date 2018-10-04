import React, { Component } from 'react';
import Client from 'shopify-buy';

const client = Client.buildClient({
    domain: 'demo-ecommerce-lpfreelance.myshopify.com',
    storefrontAccessToken: 'e60dee97bff742872f9c9b07b30e8cc2'
});

class Products extends Component{
    constructor(){
        super();
        this.state = {
            myJson: '',
        };
    }


    componentDidMount() {
        this.fetchProducts();
       // this.fetchStore();
    }

    fetchProducts(){
        // Fetch all products in your shop
        client.product.fetchAll().then((products) => {
            // Do something with the products
            console.log(products);
            console.log(client.product);
            this.setState({myJson: products.type.name});
            console.log(this.state.myJson);
        });
    }

    render(){
        return(
            <div>
                <p> {this.state.myJson} </p>
            </div>
        )
    }

}

export default Products;
