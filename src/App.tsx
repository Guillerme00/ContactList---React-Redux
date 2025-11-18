import { ThemeProvider } from 'styled-components'
import { Sidebar } from './Containers/Sidebar'
import GlobalReset, { Container } from './styles/GlobalStyle'
import DefaultTheme from './themes/Default'
import ContactList from './Containers/ContactList'

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalReset />
      <Container>
        <Sidebar />
        <ContactList />
      </Container>
    </ThemeProvider>
  )
}
export default App
