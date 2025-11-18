import styled from 'styled-components'

export const CardContainer = styled.div`
  max-width: 1024px;
  width: 100%;
`

export const ContactCardClosed = styled.div`
  border-radius: 8px;
  background-color: ${(props) => props.theme.SecondaryBackground};
  color: ${(props) => props.theme.Text};
  width: 100%;
  height: 128px;
  padding: 16px;
  padding-right: 32px;
  display: flex;
  justify-content: space-between;
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
`

export const ArrowButton = styled.button`
  cursor: pointer;
  color: ${(props) => props.theme.Text};
  background-color: transparent;
  font-size: 48px;
  border: none;
`
