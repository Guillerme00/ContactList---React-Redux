import styled from 'styled-components'

export const StyledSidebar = styled.aside`
  height: 100vh;
  background-color: ${(props) => props.theme.SecondaryBackground};
  color: ${(props) => props.theme.Text};
  padding: 16px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`
export const InputBox = styled.div`
  position: relative;
  width: 196px;

  input {
    position: relative;
    width: 100%;
    padding: 20px 10px 10px;
    background: transparent;
    outline: none;
    box-shadow: none;
    border: none;
    color: ${(props) => props.theme.Text};
    font-size: 1em;
    letter-spacing: 0.05em;
    transition: 0.5s;
    z-index: 10;
  }
  span {
    position: absolute;
    left: 0;
    padding: 20px 10px 10px;
    font-size: 1em;
    color: ${(props) => props.theme.Text};
    letter-spacing: 00.05em;
    transition: 0.5s;
    pointer-events: none;
  }
  input:valid ~ span,
  input:focus ~ span {
    color: ${(props) => props.theme.Text};
    transform: translateX(-10px) translateY(-34px);
    font-size: 0, 75em;
  }
  i {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: ${(props) => props.theme.Background};
    border-radius: 4px;
    transition: 0.5s;
    pointer-events: none;
    z-index: 9;
  }
  input:valid ~ i,
  input:focus ~ i {
    height: 44px;
  }
`

export const RegisterButton = styled.button`
  width: 100%;
  height: 7vh;
  padding: 8px;
  background: ${(props) => props.theme.Background};
  color: ${(props) => props.theme.Text};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    color: ${(props) => props.theme.Background};
    background-color: ${(props) => props.theme.Text};
  }
`
