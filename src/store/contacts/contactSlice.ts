import { createSlice } from '@reduxjs/toolkit'
import type { ContactType } from '../../types/contact'
import type { PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Contact'

const initialState: ContactType[] = [
  {
    id: 1,
    name: 'Guilherme Monteiro Toledo',
    tel: 15996841111,
    email: 'guilherme@gmail.com',
    img: null,
    description: 'Developer of this website',
    tag: enums.Choise.WORK,
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

    addContact(state, action: PayloadAction<ContactType>) {
      state.push(action.payload)
    },
  },
})

export const { updateContact, deleteContact } = contactSlice.actions
export default contactSlice.reducer
