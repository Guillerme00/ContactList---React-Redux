import styled from 'styled-components'

export const CardContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin-bottom: 64px;
`

export const Contact = styled.div`
  background-color: ${(props) => props.theme.SecondaryBackground};
  color: ${(props) => props.theme.Text};
  width: 100%;
  padding: 16px;
  padding-right: 32px;
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.55);
`

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ContactImg = styled.img`
  max-width: 112px;
  max-height: 112px;
  border-radius: 50%;
`

export const ContactName = styled.h1`
  padding-left: 16px;
  font-size: 32px;
  max-width: 500px;
  overflow-x: auto;
  white-space: nowrap;
`

export const ArrowButton = styled.button`
  cursor: pointer;
  color: ${(props) => props.theme.Text};
  background-color: transparent;
  font-size: 32px;
  border: none;
  z-index: 10;
  transform: rotate(0deg);
  transition: 0.75s ease;
  &.rotated {
    transform: rotate(180deg);
  }
`

export const ClosedContact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const OpennedForm = styled.div`
  margin-top: 32px;
`

export const NameTagDiv = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  margin-top: 16px;
  width: 100%;
  height: 32px;
  padding-left: 8px;
  margin-left: 8px;
  border-radius: 8px;
  border: none;
`
export const TextArea = styled.textarea`
  margin-top: 16px;
  width: 100%;
  height: 32px;
  padding-left: 8px;
  margin-left: 8px;
  border-radius: 8px;
  resize: none;
  height: 64px;
`

export const EditButton = styled.button`
  max-width: 96px;
  width: 100%;
  padding: 16px;
  background-color: ${(props) => props.theme.SecondaryText};
  color: ${(props) => props.theme.Background};
  border: none;
  cursor: pointer;
  margin-right: 8px;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) => props.theme.HoverButton};
  }
`

export const RemoveButton = styled.button`
  max-width: 96px;
  width: 100%;
  padding: 16px;
  background-color: ${(props) => props.theme.RemoveButton};
  color: ${(props) => props.theme.Background};
  border: none;
  cursor: pointer;
  margin-right: 8px;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) => props.theme.RemoveButtonHover};
  }
`
