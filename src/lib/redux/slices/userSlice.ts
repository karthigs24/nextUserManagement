import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  id: number
  username: string
  email: string
  phoneNumber: string
  password: string
}

const initialState: User[] = []

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload)
    },
  },
})

export const { addUser } = userSlice.actions
export default userSlice.reducer