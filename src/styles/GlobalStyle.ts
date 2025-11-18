import styled, { createGlobalStyle } from 'styled-components'

const GlobalReset = createGlobalStyle`
    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: "Lexend Deca", sans-serif;
    }

    body {
        background-color: ${(props) => props.theme.Background}
    }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export default GlobalReset
