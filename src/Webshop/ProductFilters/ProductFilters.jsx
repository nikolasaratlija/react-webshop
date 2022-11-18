import React, {Component} from 'react';
import ProductFilter from "./ProductFilter";

class ProductFilters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeFilters: []
        }
    }

    render() {
        return (
            <>
                <ProductFilter
                    name="Category"
                    filters={this.getCategories()}
                    activeFilters={this.state.activeFilters}
                    toggleFilter={this.props.toggleFilter}
                    clearFilters={this.clearFilters}
                />

                {/*<PriceFilter*/}
                {/*    range={this.getPriceRange()}*/}
                {/*/>*/}
            </>
        );
    }

    getCategories() {
        return [...new Set(this.props.products.map(p => p.category))]
    }

    clearFilters = () => {
        this.setState({activeFilters: []})
    }

    getPriceRange() {
        const min = (prev, curr) => curr.price < prev.price ? curr : prev
        const max = (prev, curr) => curr.price > prev.price ? curr : prev

        return {
            'min': this.props.products.reduce(min, this.props.products[0]).price,
            'max': this.props.products.reduce(max).price,
        }
    }
}

export default ProductFilters;