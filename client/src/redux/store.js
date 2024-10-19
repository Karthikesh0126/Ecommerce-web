import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducer.js';
import { cartReducer } from './reducers/cartReducer.js';

const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails:  getProductDetailsReducer,
    cart: cartReducer

})

const midleware = [thunk];


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...midleware))
)

export default store;