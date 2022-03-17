import { IconNames } from "../../types"
export interface ISvgIconNames {
  icons: IconNames.phone | IconNames.facebook | IconNames.linkedin | IconNames.instagram | IconNames.burger | IconNames.close | IconNames.mail | IconNames.logo | IconNames.location | IconNames.clock
}

export interface ISvgIcon {
  name?: ISvgIconNames["icons"]
  icon?: React.ReactNode
  width?: string
  height?: string
  color?: string
}
