import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface AuthState {
    authToken: string;
    isLoggedIn: boolean;
}

// Define the initial state using that type
const initialState: AuthState = {
    authToken: "",
    isLoggedIn: false,
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    logIn: (state, action: PayloadAction<string>) => {
      state.authToken = action.payload;
      state.isLoggedIn = true;
    },
  },
})

export const { logIn } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer