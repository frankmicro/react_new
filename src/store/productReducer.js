import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : [],
    inventory : []
  }

const productReducer = createSlice({
    name : 'products',
    initialState,
    reducers : {
        updateInventory(state, action) {
            if (action.payload.length) {
                state.inventory = action.payload
                return state;
                console.log(state.inventory);
            }
        },
        updateCart(state, action) {
            state.cart.push(action.payload)
        },
        deleteCartElement(state, action) {
            state.cart.splice(action.payload, 1)
        }
    }
});

export const { updateCart, updateInventory, deleteCartElement } = productReducer.actions

export default productReducer.reducer