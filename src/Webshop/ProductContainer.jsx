import React, {Component} from 'react';
import {ProductItem} from "./ProductItem";

class ProductContainer extends Component {
    render() {
        return (
            <>
                <p>Results: {this.props.products.length}</p>
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

export default ProductContainer;