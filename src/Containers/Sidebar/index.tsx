import Filter from '../../Components/FilterItem'
import {
  InputBox,
  RegisterButton,
  StyledAGithub,
  StyledSidebar,
} from './styles'
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
        <div>
          <StyledAGithub href="https://github.com/Guillerme00">
            My Github
          </StyledAGithub>
          <RegisterButton onClick={() => navigate('/register')}>
            Register New Contact
          </RegisterButton>
        </div>
      </StyledSidebar>
    </>
  )
}
