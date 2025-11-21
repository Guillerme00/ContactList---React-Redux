import * as enums from '../utils/enums/Contact'

export type ContactType = {
  id: number
  img: File | null
  name: string
  tel: number
  email: string
  description?: string | null
  tag: enums.Choise
}
