import { TagContainer, TagTitle } from './style'

type Props = {
  $name: string
}

const Tag = ({ $name }: Props) => {
  return (
    <TagContainer>
      <TagTitle>{$name}</TagTitle>
    </TagContainer>
  )
}

export default Tag
