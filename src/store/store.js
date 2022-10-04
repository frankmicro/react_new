import { configureStore } from '@reduxjs/toolkit'
//import userReducer from './userReducer';  
import sliceReducers from './sliceReducers';
import authReducer from './authReducer';
import productReducer from './productReducer';

  const store = configureStore({
    reducer : {
      user : authReducer,
      sliceReducers : sliceReducers,
      productReducer : productReducer
    }
  })

export default store;