import {selectActiveCategoryFilters} from "./selectors";

export function filterByCategory(product, state) {
    const activeCategoryFilters = selectActiveCategoryFilters(state)

    // if there are no selected category filters, then the product is just returned
    return activeCategoryFilters.length === 0 ?
        product :
        // lambda for returning a product that is contained in the current active category filters
        activeCategoryFilters.includes(product.category)
}