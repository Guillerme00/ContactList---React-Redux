import Filter from '../../Components/FilterItem'
import { InputBox, StyledSidebar } from './styles'

export const Sidebar = () => {
  return (
    <>
      <StyledSidebar>
        <InputBox>
          <input type="text" required />
          <span>Search</span>
          <i></i>
        </InputBox>
        <Filter />
      </StyledSidebar>
    </>
  )
}
