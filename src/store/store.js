import { configureStore } from '@reduxjs/toolkit'
//import userReducer from './userReducer';  
import sliceReducers from './sliceReducers';
import authReducer from './authReducer';

  const store = configureStore({
    reducer : {
      user : authReducer,
      sliceReducers : sliceReducers
    }
  })

export default store;