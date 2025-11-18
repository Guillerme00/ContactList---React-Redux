import {
  ArrowButton,
  CardContainer,
  ContactCardClosed,
  ContactImg,
  ContactName,
  ProfileContainer,
} from './styles'

const ContactCard = () => {
  return (
    <CardContainer>
      <ContactCardClosed>
        <ProfileContainer>
          <ContactImg src="https://placehold.co/112x112" alt="ContactImage" />
          <ContactName>Guilherme Monteiro Toledo</ContactName>
        </ProfileContainer>
        <ArrowButton>▽</ArrowButton>
      </ContactCardClosed>
    </CardContainer>
  )
}

export default ContactCard
