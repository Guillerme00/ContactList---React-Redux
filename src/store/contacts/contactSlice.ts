import { createSlice } from '@reduxjs/toolkit'
import type { ContactType } from '../../types/contact'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: ContactType[] = [
  {
    id: 1,
    name: 'João Silva',
    tel: 123456789,
    email: 'joao@email.com',
    img: null,
    description: 'Amigo de longa data',
  },
  {
    id: 2,
    name: 'Maria Souza',
    tel: 987654321,
    email: 'maria@email.com',
    img: null,
    description: 'Colega de trabalho',
  },
]

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    updateContact(state, action: PayloadAction<ContactType>) {
      const index = state.findIndex((c) => c.id === action.payload.id)
      if (index !== -1) state[index] = action.payload
    },

    deleteContact(state, action: PayloadAction<number>) {
      return state.filter((c) => c.id !== action.payload)
    },
  },
})

export const { updateContact, deleteContact } = contactSlice.actions
export default contactSlice.reducer
