import Filter from '../../Components/FilterItem'
import { InputBox, RegisterButton, StyledSidebar } from './styles'

export const Sidebar = () => {
  return (
    <>
      <StyledSidebar>
        {/* Div to separate the Sidebar Top and Sidebar Bottom */}
        <div>
          <InputBox>
            <input type="text" required />
            <span>Search</span>
            <i></i>
          </InputBox>
          <Filter />
        </div>
        <RegisterButton>Register New Contact</RegisterButton>
      </StyledSidebar>
    </>
  )
}
