import { createContext, ReactChild } from "react"
import { IMenu } from "../components/menu/menu.model"

interface IProvider {
  children?: ReactChild
}

export interface MenuContextData {
  menu?: IMenu[]
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
