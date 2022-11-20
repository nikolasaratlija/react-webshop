import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk";
import {productsReducer} from "./products/productsReducer";
import filtersReducer from "./filter";

const rootReducer = combineReducers({
    productsStore: productsReducer,
    filters: filtersReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => console.log(store.getState()))

export default store
