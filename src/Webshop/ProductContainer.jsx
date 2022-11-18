import React, {Component} from 'react';
import {ProductItem} from "./ProductItem";

class ProductContainer extends Component {
    render() {
        return (
            <div className="grid gap-4 grid-cols-3">
                {this.props.products.map(product =>
                    <ProductItem
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        image={product.images[0]}
                        brand={product.brand}
                        category={product.category}
                    />
                )}
            </div>
        );
    }
}

export default ProductContainer;