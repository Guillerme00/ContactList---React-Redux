import styled from 'styled-components'

type Props = {
  active: boolean
}

export const FilterContainer = styled.div`
  margin-top: 16px;
  width: 100%;
  display: grid;
  grid-template-columns: 45% 45%;
  gap: 5%;
`

export const FilterItem = styled.div<Props>`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? props.theme.Text : props.theme.Background};
  color: ${(props) =>
    props.active ? props.theme.Background : props.theme.Text};
  border-radius: 8px;
  width: 100%;
  font-size: 20px;
`
