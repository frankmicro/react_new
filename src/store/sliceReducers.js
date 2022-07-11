import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    name : 'ron',
    age :  30
  }

  export const fetchUsers = createAsyncThunk(
      'fetchuser',
      async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await res.json();
        return result[Math.floor(Math.random() * 10)].name
      }

  )

const userReducer = createSlice({
    name : 'users',
    initialState,
    reducers : {
        updateAge(state, action) {
            state.age = action.payload
        },
        updateName(state, action) {
            state.name = action.payload
        }
    },
    extraReducers:{
        [fetchUsers.fulfilled]:(state, action) => {
            state.name = action.payload
        },
        [fetchUsers.pending]:(state, action) => {
            state.name = "loading...."
        }
    }
});

export const {updateAge, updateName} = userReducer.actions

export default userReducer.reducer