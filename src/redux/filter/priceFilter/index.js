import {selectCurrentPriceRange} from "./selectors";

export const filterProductBetweenPriceRange = (product) => {
    return function (state) {
        const currentPriceRange = selectCurrentPriceRange(state)

        return currentPriceRange.min === undefined || currentPriceRange.max === undefined ?
            product : // return product if price range filter is unset
            product => // lambda for returning a product if its between a price range
                product.price > currentPriceRange.min &&
                product.price < currentPriceRange.max
    }
}
