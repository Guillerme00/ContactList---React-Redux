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
  id: number
  img: File | null
  name: string
  tel: number
  email: string
  description?: string | null
}

const ContactCard = (props: Props) => {
  const [opened, setOpened] = useState(false)
  const [editing, setEditing] = useState(false)
  const [actual, setActual] = useState<Props>({
    id: 1,
    img: props.img,
    name: 'Guilherme Monteiro Toledo',
    tel: 0,
    email: 'email@hotmail.com',
    description: props.description ?? '',
  })
  const [past, setPast] = useState(actual)

  const save = () => {
    setPast(() => ({
      id: actual.id,
      img: actual.img,
      name: actual.name,
      email: actual.email,
      tel: actual.tel,
      description: actual.description,
    }))
    setEditing(false)
  }

  const cancel = () => {
    setActual(() => ({
      id: actual.id,
      img: past.img,
      name: past.name,
      email: past.email,
      tel: past.tel,
      description: past.description,
    }))
    setEditing(false)
  }

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
            {!opened && <ContactName>{actual.name}</ContactName>}
          </ProfileContainer>
          <ButtonsContainer>
            {!opened ? (
              ''
            ) : editing ? (
              <>
                <SaveButton onClick={() => save()}>Save</SaveButton>
                <RemoveButton onClick={() => cancel()}>Cancel</RemoveButton>
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
              <ContactName>{actual.name}</ContactName>
              <TagContainer>
                <Tag $name="Family" />
                <MessageTag />
              </TagContainer>
            </NameTagDiv>
            <InputsContainer>
              <Inputs>
                {editing ? (
                  <>
                    <Input
                      type="text"
                      placeholder="Name"
                      value={actual.name}
                      onChange={(e) =>
                        setActual((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                    />
                    <Input
                      type="number"
                      placeholder="Telephone Number"
                      value={actual.tel}
                      onChange={(e) =>
                        setActual((prev) => ({
                          ...prev,
                          tel: Number(e.target.value),
                        }))
                      }
                    />
                    <Input
                      type="email"
                      placeholder="E-Mail"
                      value={actual.email}
                      onChange={(e) =>
                        setActual((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />
                  </>
                ) : (
                  <>
                    <Input
                      readOnly
                      type="text"
                      placeholder="Name"
                      value={actual.name}
                    />
                    <Input
                      value={actual.tel}
                      readOnly
                      type="number"
                      placeholder="Telephone Number"
                    />
                    <Input
                      value={actual.email}
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
