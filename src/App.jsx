import ProductContainer from "./components/Products/ProductContainer";
import React from "react";
import ProductFilter from "./components/ProductFilters/ProductFilter";
import PriceFilter from "./components/ProductFilters/PriceFilter";

function App() {
    return (
        <div className="lg:container lg:mx-auto lg:px-8">
            <section className="m-2 lg:m-4 lg:p-4 lg:border-2 flex flex-col gap-y-4">
                <ProductFilter name={"Category"}/>
                <PriceFilter/>
            </section>

            <section className="m-2 lg:m-4 lg:p-4 lg:border-2">
                <ProductContainer/>
            </section>
        </div>
    );
}

export default App;
