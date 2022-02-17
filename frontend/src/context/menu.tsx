import { createContext, ReactChild } from "react"
import { IMenuItems } from "../components/header/menu.model"

interface IProvider {
  children?: ReactChild
}

export interface MenuContextData {
  menu?: IMenuItems[]
}

export const menuContextDefaultValue: MenuContextData = {
  menu: [],
}

export const MenuContext = createContext<MenuContextData>(
  menuContextDefaultValue
)
const MenuProvider = ({ children }: IProvider) => {
  return (
    <MenuContext.Provider value={menuContextDefaultValue}>
      {children}
    </MenuContext.Provider>
  )
}

export { MenuProvider }
