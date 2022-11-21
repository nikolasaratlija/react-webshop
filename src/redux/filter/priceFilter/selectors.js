import {selectIsLoading, selectProducts} from "../../products/selectors";

export const selectPriceFilterRange = state =>
    state.filters.priceRangeFilter.priceRange

export const selectCurrentPriceRange = state =>
    state.filters.priceRangeFilter.currentPriceRange

export const selectProductsPriceRange = state => {
    if (selectIsLoading(state)) return {min: 1, max: 10000}

    const products = selectProducts(state)

    return {
        min: products.reduce((lowest, product) => product.price < lowest.price ? product : lowest).price,
        max: products.reduce((highest, product) => product.price > highest.price ? product : highest).price
    }
}
