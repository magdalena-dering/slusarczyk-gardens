import React from "react"
import clsx from "clsx"
import { styles } from "./styles"
import { ISvgIcon } from "./svg.model"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(styles)

const SvgIcon: React.FC<ISvgIcon> = props => {
  const classes = useStyles({ ...props })
  const { icon } = props

  return (
    <div
      className={clsx(
        classes.svgIconContainer,
        props.isResourceName && classes.resourceNameStyle
      )}
    >
      {icon}
    </div>
  )
}

export default SvgIcon
