import { useSelector } from 'react-redux'
import ContactCard from '../../Components/ContactCard'
import { ContactListContainer } from './styles'
import type { RootReducer } from '../../store'

const ContactList = () => {
  const contacts = useSelector((state: RootReducer) => state.contacts)

  return (
    <ContactListContainer>
      {contacts.map((contact) => (
        <ContactCard key={contact.id} {...contact} />
      ))}
    </ContactListContainer>
  )
}

export default ContactList
