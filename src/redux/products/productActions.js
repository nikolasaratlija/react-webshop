import {FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_FAILURE} from "./actionTypes";

export const fetchProductsRequest = () => ({
    type: FETCH_PRODUCTS_REQUEST
})

export const fetchProductsSuccess = products => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
})

export const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
})

export const fetchProducts = () => {
    return function (dispatch) {
        dispatch(fetchProductsRequest())

        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => {
                dispatch(fetchProductsSuccess(json.products))
            })
            .catch(error => {
                dispatch(fetchProductsFailure(error.message))
            })
    }
}