import { ThemeProvider } from 'styled-components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalReset, { Container } from './styles/GlobalStyle'
import DefaultTheme from './themes/Default'
import Home from './pages/home'
import Register from './pages/register/register'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/register',
    element: <Register />,
  },
])

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalReset />
      <RouterProvider router={routes} />
    </ThemeProvider>
  )
}
export default App
