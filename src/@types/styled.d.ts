import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    Background: string
    SecondaryBackground: string
    Text: string
    SecondaryText: string
    HoverButton: string
    PrimaryButton: string
    PrimaryButtonHover: string
    SuccessButton: string
    SuccessButtonHover: string
    SuccessBackground: string
    RemoveButton: string
    RemoveButtonHover: string
    RemoveBackground: string
  }
}
