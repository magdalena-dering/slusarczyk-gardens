import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PhoneIcon,
  BurgerIcon,
} from "./assets"

export enum IconNames {
  phone = "phone",
  facebook = "facebook",
  linkedin = "linkedin",
  instagram = "instagram",
  burger = "burger",
}

class Icons {
  phone = PhoneIcon
  facebook = FacebookIcon
  instagram = InstagramIcon
  linkedin = LinkedinIcon
  burger = BurgerIcon
}

export const icons = new Icons()
