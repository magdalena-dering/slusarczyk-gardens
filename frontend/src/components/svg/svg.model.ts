import { IconNames } from "../../types"
export interface ISvgIconNames {
  icons: IconNames.phone | IconNames.facebook | IconNames.linkedin | IconNames.instagram | IconNames.burger
}

export interface ISvgIcon {
  name?: ISvgIconNames["icons"]
  icon?: React.ReactNode
  width?: string
  height?: string
  isResourceName?: boolean
}
