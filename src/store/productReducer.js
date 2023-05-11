import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : [],
    inventory : [],
    cartTotal : 0
  }

const productReducer = createSlice({
    name : 'products',
    initialState,
    reducers : {
        updateInventory(state, action) {
            if (action.payload.length) {
                state.inventory = action.payload
                return state;
            }
        },
        updateCart(state, action) {
            state.cart.push(action.payload)
        },
        deleteCartElement(state, action) {
            state.cart.splice(action.payload, 1)
        },
        updateCartTotal(state, action) {
            state.cartTotal = action.payload;
        }
    }
});

export const { updateCart, updateInventory, deleteCartElement, updateCartTotal } = productReducer.actions

export default productReducer.reducer