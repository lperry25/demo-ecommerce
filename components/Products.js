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

    fetchStore(){
        fetch('https://:demo-ecommerce-lpfreelance.myshopify.com/admin/shop.json',{
                method: 'GET',
                    headers: {
                    '6d9fe90195c14bd17e1c5070b16cb4a4': '17fa79a84c0b7ef4496a48c204c152cc',
                }
            })
            .then(results => {
                return results.json();
            }).then(data => {
            //set the json to the state
            this.setState({myJson: results.json()});
            console.log(this.state.myJson);
        })
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
