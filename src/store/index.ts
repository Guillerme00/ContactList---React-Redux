import { configureStore } from '@reduxjs/toolkit'
import contactSliceReducer from './contacts/contactSlice'
import filterSliceReducer from './filter/filterSlice'
const store = configureStore({
  reducer: {
    contacts: contactSliceReducer,
    filter: filterSliceReducer,
  },
})

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
