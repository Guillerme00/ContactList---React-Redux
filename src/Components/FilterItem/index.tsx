import { useDispatch } from 'react-redux'
import { FilterContainer, FilterItem } from './styles'
import { useState } from 'react'
import * as enums from '../../utils/enums/Contact'
import { UpdateChoise } from '../../store/filterChoise'

const Filter = () => {
  const [Filtered, setFiltered] = useState('all')
  const filters = ['family', 'friends', 'work', 'services', 'all']

  const mapToEnum: Record<string, enums.Choise> = {
    family: enums.Choise.FAMILY,
    friends: enums.Choise.FRIENDS,
    work: enums.Choise.WORK,
    services: enums.Choise.SERVICES,
    all: enums.Choise.ALL,
  }

  const dispatch = useDispatch()

  const Capitalize = (str: string) => {
    if (!str) return str
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const handleClick = (item: string) => {
    setFiltered(item)
    dispatch(UpdateChoise(mapToEnum[item]))
  }

  return (
    <>
      <FilterContainer>
        {filters.slice(0, 4).map((item) => (
          <FilterItem
            key={item}
            $active={Filtered === item}
            onClick={() => handleClick(item)}
          >
            {Capitalize(item)}
          </FilterItem>
        ))}
      </FilterContainer>
      <FilterItem
        $active={Filtered === 'all'}
        onClick={() => handleClick(mapToEnum['all'])}
      >
        All
      </FilterItem>
    </>
  )
}

export default Filter
