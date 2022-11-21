import {selectCurrentPriceRange} from "./selectors";

export const filterProductBetweenPriceRange = (product, state) => {
    const currentPriceRange = selectCurrentPriceRange(state)

    return currentPriceRange.min === undefined && currentPriceRange.max === undefined ?
        product : // returns the product if the price range filter is unset
        // lambda for returning a product if its between a price range
        product.price >= currentPriceRange.min &&
        product.price <= currentPriceRange.max
}
