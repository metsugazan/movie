import { createSlice } from '@reduxjs/toolkit'

export const favSlice = createSlice({
  name: 'favorite',
  initialState: {
    value: [],
  },
  reducers: {
    addfav: (state,action) => {
        state.value.push({id:action.id,title:action.payload.name,img:action.payload.picture,metascore:action.payload.metascore,synopsis:action.payload.synopsis})
    },
    removefav: (state,action) => {
        state.value = state.value.filter(item => item.title !== action.payload)
    }
  }
})

export const { addfav,removefav } = favSlice.actions
export default favSlice.reducer

