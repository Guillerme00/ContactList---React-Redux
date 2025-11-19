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
  InputsContainer,
  Inputs,
  TagContainer,
  SaveButton,
} from './styles'
import Tag from '../TagItem'
import MessageTag from '../MessageTag'

type Props = {
  img: File | null
  name: string
  tel: number
  email: string
  description?: string | null
}

const ContactCard = (props: Props) => {
  const [opened, setOpened] = useState(false)
  const [editing, setEditing] = useState(false)
  const [past, setPast] = useState<Props>({
    img: props.img,
    name: props.name,
    tel: props.tel,
    email: props.email,
    description: props.description ?? '',
  })

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
            {!opened && <ContactName>{past.name}</ContactName>}
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
                {editing ? (
                  <>
                    <Input type="text" placeholder="Name" />
                    <Input type="number" placeholder="Telephone Number" />
                    <Input type="email" placeholder="E-Mail" />
                  </>
                ) : (
                  <>
                    <Input readOnly type="text" placeholder="Name" />
                    <Input
                      value={props.tel}
                      readOnly
                      type="number"
                      placeholder="Telephone Number"
                    />
                    <Input
                      value={props.email}
                      readOnly
                      type="email"
                      placeholder="E-Mail"
                    />
                  </>
                )}
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
