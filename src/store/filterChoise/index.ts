import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Contact'

type inicialFilter = {
  choise: enums.Choise
}

const initialState: inicialFilter = {
  choise: enums.Choise.ALL,
}

const FilterChoise = createSlice({
  name: 'FilterChoise',
  initialState,
  reducers: {
    UpdateChoise: (state, action: PayloadAction<enums.Choise>) => {
      state.choise = action.payload
    },
  },
})

export const { UpdateChoise } = FilterChoise.actions
export default FilterChoise.reducer
