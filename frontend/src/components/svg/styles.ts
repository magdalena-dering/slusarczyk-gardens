import { createStyles } from "@mui/styles"
import { ISvgIcon } from "./svg.model"

export const styles = () =>
  createStyles({
    svgIconContainer: ({ ...props }: ISvgIcon) => ({
      width: props.width ? props.width : "24px",
      height: props.height ? props.height : "24px",
      "& > svg": {
        width: props.width ? props.width : "24px",
        height: props.height ? props.height : "24px",
      },
    }),
    resourceNameStyle: {
      marginRight: "5px",
      marginLeft: "16px",
    },
  })
