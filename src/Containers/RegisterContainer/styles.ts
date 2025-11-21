import styled from 'styled-components'

export const StyledContainer = styled.div`
  color: ${(props) => props.theme.Text};
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1024px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.SecondaryBackground};
`

export const StyledTitle = styled.h1`
  font-size: 40px;
  margin-bottom: 48px;
  margin-top: 32px;
`
export const StyledSubTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
`

export const StyledForm = styled.ul`
  width: 75%;
  padding-bottom: 32px;
`
export const StyledInput = styled.input`
  width: 100%;
  border: none;
  height: 32px;
  border-radius: 8px;
  padding-left: 8px;
  margin-bottom: 16px;
`

export const StyledArea = styled.textarea`
  width: 100%;
  border: none;
  height: 64px;
  border-radius: 8px;
  padding-left: 8px;
  padding-top: 4px;
  margin-bottom: 16px;
  resize: none;
`

export const StyledLabel = styled.label`
  margin-right: 16px;
`
