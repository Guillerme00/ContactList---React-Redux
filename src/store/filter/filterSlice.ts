import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Contact'

type FilterState = {
  choise: 'family' | 'friends' | 'work' | 'services' | 'all'
  value?: enums.Choise
}

const initialState: FilterState = {
  choise: 'all',
}

const FilterSlice = createSlice({
  name: 'Filter',
  initialState,
  reducers: {
    ChangeFilter: (state, action: PayloadAction<FilterState>) => {
      state.choise = action.payload.choise
      state.value = action.payload.value
    },
  },
})

export const { ChangeFilter } = FilterSlice.actions
export default FilterSlice.reducer
