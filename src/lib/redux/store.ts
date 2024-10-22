import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import authReducer from './slices/authSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      users: userReducer,
      auth: authReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']