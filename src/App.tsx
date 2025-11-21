import { ThemeProvider } from 'styled-components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalReset, { Container } from './styles/GlobalStyle'
import DefaultTheme from './themes/Default'
import Home from './pages/home'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/register',
    element: <h1>Hello World</h1>,
  },
])

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalReset />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </ThemeProvider>
  )
}
export default App
