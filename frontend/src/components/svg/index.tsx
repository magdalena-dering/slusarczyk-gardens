import React from "react"
import clsx from "clsx"

import { styles } from "./styles"
import { SvgIconProps } from "./svg.model"
import { IconNames, icons } from "../../types"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(styles)

const SvgIcon: React.FC<SvgIconProps> = props => {
  const classes = useStyles({ ...props })
  const { name } = props
  const { icon } = props

  const ICON_NAMES = {
    [IconNames.products]: <icons.products />,
    [IconNames.dashboard]: <icons.dashboard />,
    [IconNames.applications]: <icons.applications />,
    [IconNames.finance]: <icons.finance />,
  }

  return (
    <div
      className={clsx(
        classes.svgIconContainer,
        props.isResourceName && classes.resourceNameStyle
      )}
    >
      {name ? ICON_NAMES[name] : icon}
    </div>
  )
}

export default SvgIcon
