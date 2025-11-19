import { use, useState } from 'react'
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
  InputsContainer,
  Inputs,
  TagContainer,
  SaveButton,
} from './styles'
import Tag from '../TagItem'
import MessageTag from '../MessageTag'

const ContactCard = () => {
  const [opened, setOpened] = useState(false)
  const [editing, setEditing] = useState(false)
  const [past, setPast] = useState('')

  return (
    <CardContainer>
      <Contact>
        <ClosedContact>
          <ProfileContainer>
            {!opened ? (
              <ContactImg
                src="https://placehold.co/112x112"
                alt="ContactImage"
              />
            ) : (
              <ContactImg
                src="https://placehold.co/144x144"
                alt="ContactImage"
              />
            )}
            {!opened ? (
              <ContactName>Guilherme Monteiro Toledo</ContactName>
            ) : (
              ''
            )}
          </ProfileContainer>
          <ButtonsContainer>
            {!opened ? (
              ''
            ) : editing ? (
              <>
                <SaveButton onClick={() => setEditing(false)}>Save</SaveButton>
                <RemoveButton onClick={() => setEditing(false)}>
                  Cancel
                </RemoveButton>
              </>
            ) : (
              <>
                <EditButton onClick={() => setEditing(true)}>Edit</EditButton>
                <RemoveButton>Delete</RemoveButton>
              </>
            )}
            <ArrowButton
              onClick={() => setOpened(!opened)}
              className={opened ? 'rotated' : ''}
            >
              ▽
            </ArrowButton>
          </ButtonsContainer>
        </ClosedContact>
        {!opened ? (
          ''
        ) : (
          <OpennedForm>
            <NameTagDiv>
              <ContactName>Guilherme Monteiro Toledo</ContactName>
              <TagContainer>
                <Tag $name="Family" />
                <MessageTag />
              </TagContainer>
            </NameTagDiv>
            <InputsContainer>
              <Inputs>
                <Input readOnly type="text" placeholder="Name" />
                <Input readOnly type="number" placeholder="Telephone Number" />
                <Input readOnly type="email" placeholder="E-Mail" />
              </Inputs>
              <TextArea readOnly placeholder="Description" />
            </InputsContainer>
          </OpennedForm>
        )}
      </Contact>
    </CardContainer>
  )
}

export default ContactCard
