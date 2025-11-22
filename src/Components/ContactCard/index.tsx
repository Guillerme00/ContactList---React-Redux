import { useDispatch } from 'react-redux'
import { updateContact, deleteContact } from '../../store/contacts/contactSlice'
import type { AppDispatch } from '../../store'

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
import type { ContactType } from '../../types/contact'

const ContactCard = (props: ContactType) => {
  const [opened, setOpened] = useState(false)
  const [editing, setEditing] = useState(false)
  const [actual, setActual] = useState<ContactType>(props)
  const [past, setPast] = useState(props)

  const save = () => {
    setPast(actual)
    setEditing(false)
    dispatch(updateContact(actual))
  }

  const cancel = () => {
    setActual(past)
    setEditing(false)
  }

  const handleDelete = () => {
    dispatch(deleteContact(actual.id))
  }

  const capitalize = (str: string) => {
    if (!str) return str
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const dispatch = useDispatch<AppDispatch>()

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
                <RemoveButton onClick={() => handleDelete()}>
                  Delete
                </RemoveButton>
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
                <Tag $name={capitalize(actual.tag)} />
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
              {editing ? (
                <TextArea
                  placeholder="Description"
                  value={actual.description ?? ''}
                  onChange={(e) =>
                    setActual((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                />
              ) : (
                <TextArea
                  readOnly
                  placeholder="Description"
                  value={actual.description ?? ''}
                />
              )}
            </InputsContainer>
          </OpennedForm>
        )}
      </Contact>
    </CardContainer>
  )
}

export default ContactCard
