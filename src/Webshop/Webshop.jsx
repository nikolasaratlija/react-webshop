import React, {Component} from 'react';
import ProductContainer from "./ProductContainer";
import ProductFilters from "./ProductFilters/ProductFilters";

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
        fetch('https://dummyjson.com/products')
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
                {/*Filters*/}
                <section className="flex gap-y-2 flex-col mb-4 m-2 p-4 lg:m-4 border-2 lg:mb-4">
                    {this.state.loading ? '' :
                        <ProductFilters
                            products={this.state.products}
                            toggleFilter={this.toggleFilter}
                        />
                    }
                </section>

                {/*Products List*/}
                <section className="m-2 lg:m-4 lg:p-4 lg:border-2">
                    {this.state.loading ? 'loading...' :
                        <ProductContainer products={this.getFilteredProducts()}/>
                    }
                </section>
            </>
        );
    }

    toggleFilter = (filter) => {
        // immutably sets a filter variable
        const filters = this.state.activeFilters.includes(filter) ? // check if filters contains the passed filter
            this.state.activeFilters.filter(f => f !== filter) : // return all filters except the passed filter
            [...this.state.activeFilters, filter] // return all filters + the passed filter

        this.setState({activeFilters: filters})
    }

    getFilteredProducts = () => {
        return this.state.activeFilters.length === 0 ? this.state.products :
            this.state.products.filter(p => this.state.activeFilters.includes(p.category));
    }
}

export default Webshop;