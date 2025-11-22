import Filter from '../../Components/FilterItem'
import { InputBox, RegisterButton, StyledSidebar } from './styles'
import { useNavigate } from 'react-router-dom'

export const Sidebar = () => {
  const navigate = useNavigate()
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
        <RegisterButton onClick={() => navigate('/register')}>
          Register New Contact
        </RegisterButton>
      </StyledSidebar>
    </>
  )
}
