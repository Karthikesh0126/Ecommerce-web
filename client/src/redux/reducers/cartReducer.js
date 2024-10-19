

import * as actionType from '../constants/cartConstant';



export const cartReducer = (state = {cartItems: [] }, action) => {
    switch(action.type) {
        case actionType.ADD_TO_CART:
            const item = action.payload; // `item` should be the whole product, not just the id
            const exist = state.cartItems.find(product => product.id === item.id); // Correct comparison

            if (exist) {
                return { 
                    ...state, 
                    cartItems: state.cartItems.map(data => data.product === exist.product ? item : data) // Compare by id
                }
            } else {
                return { 
                    ...state, 
                    cartItems: [...state.cartItems, item] 
                }
            }

        case actionType.REMOVE_FROM_CART:
            return { 
                ...state, 
                cartItems: state.cartItems.filter(product => product.id !== action.payload ) // Correct comparison
            }

        default:
            return state;
    }
};
