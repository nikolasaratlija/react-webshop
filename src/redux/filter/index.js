import {combineReducers} from "redux";
import {categoryFilterReducer} from "./category/reducer";
import {priceFilterReducer} from "./priceFilter/reducer";
import {filterByCategory} from "./category";
import {filterProductBetweenPriceRange} from "./priceFilter";

const filtersReducer = combineReducers({
    categoryFilters: categoryFilterReducer,
    priceRangeFilter: priceFilterReducer
})

export default filtersReducer
export {setCategoryFilter, clearCategoryFilter} from './category/filterActions'
export {selectActiveCategoryFilters} from './category/selectors'

// contains all filters which the products will be filtered by. this is used by the frontend
export const selectFilters = state => [
    product => filterByCategory(product, state),
    product => filterProductBetweenPriceRange(product, state)
]