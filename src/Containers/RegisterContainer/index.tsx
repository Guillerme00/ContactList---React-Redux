import { useState } from 'react'
import {
  StyledContainer,
  StyledForm,
  StyledInput,
  StyledRegister,
  StyledTitle,
  StyledArea,
  StyledSubTitle,
  StyledLabel,
} from './styles'
import type { ContactType } from '../../types/contact'
import * as enums from '../../utils/enums/Contact'

const RegisterContainer = () => {
  const [contact, setContact] = useState<ContactType>({
    name: '',
    tel: 0,
    email: '',
    description: '',
    tag: enums.Choise.NONE,
    id: 1,
    img: null,
  })

  const attState = (e: number | string, item: string) => {
    setContact({
      ...contact,
      [item]: e,
    })
  }

  return (
    <>
      <StyledContainer>
        <StyledRegister>
          <StyledTitle>Register a new Contact</StyledTitle>
          <StyledForm>
            <StyledInput
              type="text"
              placeholder="Name"
              onChange={(item) => attState(item.target.value, 'name')}
            />
            <StyledInput
              type="number"
              placeholder="Telephone"
              onChange={(item) => attState(item.target.value, 'tel')}
            />
            <StyledInput
              type="email"
              placeholder="Email"
              onChange={(item) => attState(item.target.value, 'email')}
            />
            <StyledArea
              placeholder="Description"
              onChange={(item) => attState(item.target.value, 'description')}
            />
            <form>
              {' '}
              <StyledSubTitle>Select the contact category:</StyledSubTitle>
              <StyledLabel>
                <input
                  type="radio"
                  name="type"
                  value={enums.Choise.FAMILY}
                  checked={contact.tag === enums.Choise.FAMILY}
                  onChange={(item) => attState(item.target.value, 'tag')}
                />
                Family
              </StyledLabel>
              <StyledLabel>
                <input
                  type="radio"
                  name="type"
                  value={enums.Choise.FAMILY}
                  checked={contact.tag === enums.Choise.FRIENDS}
                  onChange={(item) => attState(item.target.value, 'tag')}
                />
                Friends
              </StyledLabel>
              <StyledLabel>
                <input
                  type="radio"
                  name="type"
                  value={enums.Choise.WORK}
                  checked={contact.tag === enums.Choise.WORK}
                  onChange={(item) => attState(item.target.value, 'tag')}
                />
                Work
              </StyledLabel>
              <StyledLabel>
                <input
                  type="radio"
                  name="type"
                  value={enums.Choise.SERVICES}
                  checked={contact.tag === enums.Choise.SERVICES}
                  onChange={(item) => attState(item.target.value, 'tag')}
                />
                Services
              </StyledLabel>
            </form>
          </StyledForm>
        </StyledRegister>
      </StyledContainer>
    </>
  )
}

export default RegisterContainer
