import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    logged: false,
  },
  reducers: {
    setLogged: (state, action) => {
      state.logged = action.payload
    },
  },
})
export const { setLogged } = counterSlice.actions
export default counterSlice.reducer