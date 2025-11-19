import ContactCard from '../../Components/ContactCard'
import { ContactListContainer } from './styles'

const ContactList = () => {
  return (
    <ContactListContainer>
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </ContactListContainer>
  )
}

export default ContactList
