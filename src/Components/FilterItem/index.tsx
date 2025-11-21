import { FilterContainer, FilterItem } from './styles'
import { useState } from 'react'

const Filter = () => {
  const [Filtered, setFiltered] = useState('all')

  const filters = ['family', 'friends', 'work', 'services', 'all']

  const Capitalize = (str: string) => {
    if (!str) return str
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return (
    <>
      <FilterContainer>
        {filters.slice(0, 4).map((item) => (
          <FilterItem
            key={item}
            $active={Filtered === item}
            onClick={() => setFiltered(item)}
          >
            {Capitalize(item)}
          </FilterItem>
        ))}
      </FilterContainer>
      <FilterItem
        $active={Filtered === 'all'}
        onClick={() => setFiltered('all')}
      >
        All
      </FilterItem>
    </>
  )
}

export default Filter
