import { configureStore } from '@reduxjs/toolkit'
import FavReducer from './FavReducer'

export default configureStore({
    reducer: {
        FavReducer: FavReducer,
    },
})