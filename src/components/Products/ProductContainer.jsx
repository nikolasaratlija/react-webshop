import React, {Component} from 'react';
import {ProductItem} from "./ProductItem";
import {connect} from "react-redux";
import {fetchProducts} from "../../redux";

class ProductContainer extends Component {
    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        return (
            this.props.isLoading ? 'Loading...' :
                <>
                    <p className="font-bold">Results: {this.props.products.length}</p>
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
                        {this.props.products.map(product =>
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
    products: state.productsStore.products,
    isLoading: state.productsStore.loading
})

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductContainer);