import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  id: number
  username: string
  email: string
  phoneNumber: string
}

interface AuthState {
  currentUser: User | null
}

const initialState: AuthState = {
  currentUser: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload
    },
    clearCurrentUser: (state) => {
      state.currentUser = null
    },
  },
})

export const { setCurrentUser, clearCurrentUser } = authSlice.actions
export default authSlice.reducer