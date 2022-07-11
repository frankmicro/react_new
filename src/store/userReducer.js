import { createReducer } from "@reduxjs/toolkit"
import {userActions} from './userActions'

const initialState = {
    name : 'ron',
    age :  30
  }

const userReducer = createReducer(initialState, (builder) => {
    builder.addCase('UPDATE_AGE', (state, action) => {
        state.age = action.payload
    })
    builder.addCase(userActions, (state, action) => {
        state.name = action.payload
    })
})

export default userReducer


// const userReducer = (state=initialState, action) => {//old way
//     if (action.type === 'UPDATE_AGE') {//need to check if condition
//         return {
//             ...state,//need to make copy of state
//             age:action.payload * 10
//         }
//     }
//     return state//need to return
// }