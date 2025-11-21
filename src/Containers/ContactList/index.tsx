import { useSelector } from 'react-redux'
import ContactCard from '../../Components/ContactCard'
import { ContactListContainer } from './styles'
import type { RootReducer } from '../../store'
import * as enums from '../../utils/enums/Contact'

const ContactList = () => {
  const contacts = useSelector((state: RootReducer) => state.contacts)
  const filter = useSelector((state: RootReducer) => state.filterChoise)

  const filteredContacts = () => {
    if (filter.choise === enums.Choise.ALL) return contacts
    return contacts.filter((contact) => contact.tag === filter.choise)
  }

  console.log(filter)

  return (
    <ContactListContainer>
      {filteredContacts().map((contact) => (
        <ContactCard key={contact.id} {...contact} />
      ))}
    </ContactListContainer>
  )
}

export default ContactList
