import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PhoneIcon,
  BurgerIcon,
  CloseIcon,
  MailIcon,
} from "./assets"

export enum IconNames {
  phone = "phone",
  facebook = "facebook",
  linkedin = "linkedin",
  instagram = "instagram",
  burger = "burger",
  close = "close",
  mail = "mail",
}

class Icons {
  phone = PhoneIcon
  facebook = FacebookIcon
  instagram = InstagramIcon
  linkedin = LinkedinIcon
  burger = BurgerIcon
  close = CloseIcon
  mail = MailIcon
}

export const icons = new Icons()
