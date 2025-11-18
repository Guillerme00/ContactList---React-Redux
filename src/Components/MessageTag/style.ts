import styled from 'styled-components'

export const TagContainer = styled.div`
  max-width: 192px;
  margin-left: 16px;
`

export const TagTitle = styled.h3`
  color: ${(props) => props.theme.Text};
  background-color: ${(props) => props.theme.Background};
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.Text};
    color: ${(props) => props.theme.Background};
  }
`
