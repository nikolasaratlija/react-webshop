import {selectActiveCategoryFilters} from "./selectors";

export function filterByCategory(product, state) {
    const activeCategoryFilters = selectActiveCategoryFilters(state)

    return activeCategoryFilters.length === 0 ?
        product :
        activeCategoryFilters.includes(product.category)
}