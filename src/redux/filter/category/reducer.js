import {TOGGLE_CATEGORY_FILTER, CLEAR_CATEGORY_FILTER} from "./actionTypes";

const initialState = {
    categories: []
}

export const categoryFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CATEGORY_FILTER:
            return state.categories.includes(action.payload) ?
                {
                    ...state,
                    categories: state.categories.filter(f => f !== action.payload)
                } :
                {
                    ...state,
                    categories: [...state.categories, action.payload]
                }
        case CLEAR_CATEGORY_FILTER:
            return {
                ...state,
                categories: []
            }
        default:
            return state
    }
}