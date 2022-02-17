import React from "react";
import { icons } from "../../types";
import SvgIcon from "../svg";
import { useStyles } from "./styles";

const SocialIcons = () => {
    const classes = useStyles();
    return (
        <div className={classes.socialIcons}>
            <SvgIcon icon={<icons.facebook />} width="28px" height="28px" />
            <SvgIcon icon={<icons.instagram />} width="28px" height="28px" />
            <SvgIcon icon={<icons.linkedin />} width="28px" height="28px" />
        </div>
    )
}
export default SocialIcons;