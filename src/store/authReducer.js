import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {externalPostCall} from '../helpers/http'
import {storeToken} from './../helpers/localstorage'
 
const initialState = {
    token : '',
    loading : false,
    error : '',
    success : ''
}

export const signUpUser = createAsyncThunk(
    'signUpUser',
    async (body) => {
        const result = await externalPostCall('/v1/admin/signup', body)
        return result
    }
)

export const signInUser = createAsyncThunk(
    'signInUser',
    async (body) => {
        const result = await externalPostCall('/v1/admin/signin', body)
        return result
    }
)

const authReducer = createSlice({
    name : "user",
    initialState,
    reducers : {},
    extraReducers:{
        [signUpUser.fulfilled]:(state, action)=>{
            state.loading = false
            if(action.payload.success) {
                state.success =  action.payload.message
            } else {
                state.error = action.payload.message
            }
        },
        [signUpUser.pending]:(state, action)=>{
            state.loading = true
        },
        [signUpUser.error]:()=>{
            
        },
        [signInUser.fulfilled]:(state, action)=>{
            state.loading = false
            if(action.payload.success) {
                state.success =  action.payload.message
                state.token = action.payload.data.token
                storeToken(state.token)
            } else {
                state.error = action.payload.message
            }
        },
        [signInUser.pending]:(state, action)=>{
            state.loading = true
        },
    }
})

export default authReducer.reducer