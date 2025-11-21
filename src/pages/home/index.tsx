import ContactList from '../../Containers/ContactList'
import { Sidebar } from '../../Containers/Sidebar'
import { Container } from '../../styles/GlobalStyle'

const Home = () => (
  <>
    <Container>
      <Sidebar />
      <ContactList />
    </Container>
  </>
)

export default Home
