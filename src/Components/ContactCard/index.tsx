import { useState } from 'react'
import {
  ArrowButton,
  CardContainer,
  Contact,
  ContactImg,
  ContactName,
  ProfileContainer,
  ClosedContact,
  OpennedForm,
  NameTagDiv,
  Input,
  TextArea,
  ButtonsContainer,
  EditButton,
  RemoveButton,
} from './styles'
import Tag from '../TagItem'
import MessageTag from '../MessageTag'

const ContactCard = () => {
  const [opened, setOpened] = useState(false)
  return (
    <CardContainer>
      <Contact>
        <ClosedContact>
          <ProfileContainer>
            <ContactImg src="https://placehold.co/112x112" alt="ContactImage" />
            <ContactName>Guilherme Monteiro Toledo</ContactName>
          </ProfileContainer>
          <ButtonsContainer>
            <EditButton>Edit</EditButton>
            <RemoveButton>Delete</RemoveButton>
            <ArrowButton
              onClick={() => setOpened(!opened)}
              className={opened ? 'rotated' : ''}
            >
              ▽
            </ArrowButton>
          </ButtonsContainer>
        </ClosedContact>
        <OpennedForm>
          <NameTagDiv>
            <ContactName>Guilherme Monteiro Toledo</ContactName>
            <Tag $name="Family" />
            <MessageTag />
          </NameTagDiv>
          <Input readOnly type="text" placeholder="Name" />
          <Input readOnly type="number" placeholder="Telephone Number" />
          <Input readOnly type="email" placeholder="E-Mail" />
          <TextArea readOnly placeholder="Description" />
        </OpennedForm>
      </Contact>
    </CardContainer>
  )
}

export default ContactCard
