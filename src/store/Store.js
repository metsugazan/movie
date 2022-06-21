import { configureStore } from '@reduxjs/toolkit'
import favReducer from './data/favReducer'

export default configureStore({
    reducer: {
        favReducer: favReducer,
    },
})