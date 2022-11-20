import {combineReducers} from "redux";
import {categoryFilterReducer} from "./category/reducer";

const filtersReducer = combineReducers({
    categoryFilters: categoryFilterReducer
})

export default filtersReducer
export {setCategoryFilter, clearCategoryFilter} from './category/filterActions'
export {selectActiveCategoryFilters} from './category/selectors'