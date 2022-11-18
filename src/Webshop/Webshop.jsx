import React, {Component} from 'react';
import ProductContainer from "./ProductContainer";
import ProductFilter from "./ProductFilter";

class Webshop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            loading: true,
            activeFilters: []
        }
    }

    componentDidMount() {
        fetch('https://dummyjson.com/products?limit=10')
            .then(res => res.json())
            .then(productsJson => {
                this.setState({
                    products: productsJson.products,
                    loading: false
                })
            });
    }

    render() {
        return (
            <>
                <section className="flex gap-y-2 flex-col mb-4 m-2 p-4 lg:m-4 border-2 lg:mb-4">
                    <ProductFilter name="Brand" filters={this.getBrandFilters()}/>
                    <ProductFilter name="Category" filters={this.getCategoryFilters()}/>
                </section>

                <section className="m-2 lg:m-4 lg:p-4 lg:border-2">
                    {this.state.loading ? 'loading...' : <ProductContainer products={this.state.products}/>}
                </section>
            </>
        );
    }

    getBrandFilters() {
        return [...new Set(this.state.products.map(p => p.brand))]
    }

    getCategoryFilters() {
        return [...new Set(this.state.products.map(p => p.category))]
    }
}

export default Webshop;