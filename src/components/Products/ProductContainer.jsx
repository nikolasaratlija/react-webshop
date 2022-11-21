import React, {Component} from 'react';
import {ProductItem} from "./ProductItem";
import {connect} from "react-redux";
import {fetchProducts} from "../../redux";
import {selectFilters} from "../../redux/filter";
import {selectIsLoading, selectProducts} from "../../redux/products/selectors";

class ProductContainer extends Component {
    componentDidMount() {
        this.props.fetchProducts()
    }

    getFilteredProducts = () => {
        // loops over all filters and only returns products that all filters
        return this.props.products.filter(
            product => this.props.filters.every(filter => filter(product)))
    }

    render() {
        return (
            this.props.isLoading ? 'Loading...' :
                <>
                    <p className="font-bold">Results: {this.getFilteredProducts().length}</p>
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
                        {this.getFilteredProducts().map(product =>
                            <ProductItem
                                key={product.id}
                                title={product.title}
                                description={product.description}
                                price={product.price}
                                // image={product.images[0]}
                                brand={product.brand}
                                category={product.category}
                            />
                        )}
                    </div>
                </>
        );
    }
}

const mapStateToProps = state => ({
    products: selectProducts(state),
    isLoading: selectIsLoading(state),
    filters: selectFilters(state)
})

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductContainer);