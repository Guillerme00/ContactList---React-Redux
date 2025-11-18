import { FilterContainer, FilterItem } from './styles'

const Filter = () => {
  return (
    <>
      <FilterContainer>
        <FilterItem $active={false}>Family</FilterItem>
        <FilterItem $active={false}>Friends</FilterItem>
        <FilterItem $active={false}>Work</FilterItem>
        <FilterItem $active={false}>Services</FilterItem>
      </FilterContainer>
      <FilterItem $active={true}>All</FilterItem>
    </>
  )
}

export default Filter
