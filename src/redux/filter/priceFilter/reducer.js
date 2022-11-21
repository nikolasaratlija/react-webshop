import {SET_PRICE_FILTER, CLEAR_PRICE_FILTER, SET_PRICE_FILTER_RANGE} from "./actionTypes";

const initialState = {
    currentPriceRange: {min: undefined, max: undefined},
    priceRange: {min: undefined, max: undefined}
}

export const priceFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRICE_FILTER_RANGE:
            return {
                ...state,
                priceRange: {min: action.payload.min, max: action.payload.max}
            }
        case SET_PRICE_FILTER:
            return {
                ...state,
                currentPriceRange: {min: action.payload.min, max: action.payload.max}
            }
        case CLEAR_PRICE_FILTER:
            return {
                ...state,
                priceRange: {min: undefined, max: undefined}
            }
        default:
            return state
    }
}