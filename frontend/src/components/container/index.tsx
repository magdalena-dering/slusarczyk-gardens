import React from "react";
import { Container as MuiContainer } from "@mui/material";
import { useStyles } from "./styles";

interface IContainer {
  children: React.ReactNode;
}

const Container = ({ children }: IContainer) => {
  const classes = useStyles();

  return <MuiContainer className={classes.root}>{children}</MuiContainer>;
};

export default Container;