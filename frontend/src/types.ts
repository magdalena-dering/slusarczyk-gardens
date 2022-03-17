import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PhoneIcon,
  BurgerIcon,
  CloseIcon,
  MailIcon,
  LogoIcon,
  ClockIcon,
  LocationIcon,
} from "./assets"

export enum IconNames {
  phone = "phone",
  facebook = "facebook",
  linkedin = "linkedin",
  instagram = "instagram",
  burger = "burger",
  close = "close",
  mail = "mail",
  logo = "logo",
  clock = "clock",
  location = "location"
}

class Icons {
  phone = PhoneIcon
  facebook = FacebookIcon
  instagram = InstagramIcon
  linkedin = LinkedinIcon
  burger = BurgerIcon
  close = CloseIcon
  mail = MailIcon
  logo = LogoIcon
  clock = ClockIcon
  location = LocationIcon
}

export const icons = new Icons()
