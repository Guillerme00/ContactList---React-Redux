import { configureStore } from '@reduxjs/toolkit'
import contactSliceReducer from './contacts/contactSlice'
const store = configureStore({
  reducer: {
    contacts: contactSliceReducer,
  },
})

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
