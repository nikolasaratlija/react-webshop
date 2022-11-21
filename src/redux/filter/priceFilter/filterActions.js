import {SET_PRICE_FILTER, CLEAR_PRICE_FILTER, SET_PRICE_FILTER_RANGE} from "./actionTypes";

export const setPriceFilter = value => ({
    type: SET_PRICE_FILTER,
    payload: value
})

export const clearPriceFilterRange = value => ({
    type: SET_PRICE_FILTER_RANGE,
    payload: value
})

export const clearPriceFilter = () => ({
    type: CLEAR_PRICE_FILTER,
})