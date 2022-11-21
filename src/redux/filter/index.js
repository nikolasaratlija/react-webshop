import {combineReducers} from "redux";
import {categoryFilterReducer} from "./category/reducer";
import {priceFilterReducer} from "./priceFilter/reducer";
import {filterByCategory} from "./category";

const filtersReducer = combineReducers({
    categoryFilters: categoryFilterReducer,
    priceRangeFilter: priceFilterReducer
})

export default filtersReducer
export {setCategoryFilter, clearCategoryFilter} from './category/filterActions'
export {selectActiveCategoryFilters} from './category/selectors'

export const selectFilters = state => [
    product => filterByCategory(product, state)
]