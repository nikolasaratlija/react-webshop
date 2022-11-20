import {combineReducers} from "redux";
import {categoryFilterReducer} from "./category/reducer";
import {selectActiveCategoryFilters} from "./category/selectors";

const filtersReducer = combineReducers({
    categoryFilters: categoryFilterReducer
})

export default filtersReducer
export {setCategoryFilter, clearCategoryFilter} from './category/filterActions'
export {selectActiveCategoryFilters} from './category/selectors'

export const selectFilters = state =>
    [
        product => (
            selectActiveCategoryFilters(state).length === 0 ?
                product :
                selectActiveCategoryFilters(state).includes(product.category)
        )
    ]