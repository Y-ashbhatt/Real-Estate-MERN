import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from './user/userSlice.js'

export const store = configureStore({
  reducer: { user: userReducer },
    // prevent error for not serializing variable
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false ,
  })
})