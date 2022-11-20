import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk";
import {productsReducer} from "./products/productsReducer";

const rootReducer = combineReducers({
    productsStore: productsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => console.log(store.getState()))

export default store
