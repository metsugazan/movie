import { createSlice } from '@reduxjs/toolkit'

export const favSlice = createSlice({
  name: 'favorite',
  initialState: {
    value: [],
  },
  reducers: {
    addfav: (state,action) => {
        state.value.push({id:action.id,title:action.payload.title,poster_path:action.payload.poster_path,vote_average:action.payload.vote_average,overview:action.payload.overview})
    },
    removefav: (state,action) => {
        state.value = state.value.filter(item => item.title !== action.payload)
    }
  }
})

export const { addfav,removefav } = favSlice.actions
export default favSlice.reducer

