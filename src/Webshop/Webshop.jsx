import React, {Component} from 'react';
import ProductContainer from "./ProductContainer";

class Webshop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            loading: true
        }
    }

    componentDidMount() {
        fetch('https://dummyjson.com/products?limit=10')
            .then(res => res.json())
            .then(productsJson => {
                this.setState(({
                    products: productsJson.products,
                    loading: false
                }))
            });
    }

    render() {
        return (
            this.state.loading ?
                'loading...' :
                <ProductContainer products={this.state.products}/>
        );
    }
}

export default Webshop;