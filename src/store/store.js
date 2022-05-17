import { configureStore } from '@reduxjs/toolkit'
//import userReducer from './userReducer';  
import sliceReducers from './sliceReducers';

  const store = configureStore({
    reducer:sliceReducers
  })

export default store;