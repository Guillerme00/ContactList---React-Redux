import { ThemeProvider } from 'styled-components'
import { Sidebar } from './Containers/Sidebar'
import GlobalReset, { Container } from './styles/GlobalStyle'
import DefaultTheme from './themes/Default'

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalReset />
      <Container>
        <Sidebar />
      </Container>
    </ThemeProvider>
  )
}
export default App
