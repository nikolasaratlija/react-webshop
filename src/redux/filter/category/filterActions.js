import {TOGGLE_CATEGORY_FILTER, CLEAR_CATEGORY_FILTER} from "./actionTypes";

export const setCategoryFilter = value => ({
    type: TOGGLE_CATEGORY_FILTER,
    payload: value
})

export const clearCategoryFilter = () => ({
    type: CLEAR_CATEGORY_FILTER,
})