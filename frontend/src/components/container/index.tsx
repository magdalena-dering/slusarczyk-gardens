import React from "react";
import { Container as MuiContainer } from "@mui/material";
import { useStyles } from "./styles";
import { IContainer } from "./container.model";

const Container = ({ children }: IContainer) => {
  const classes = useStyles();

  return <MuiContainer className={classes.root}>{children}</MuiContainer>;
};

export default Container;