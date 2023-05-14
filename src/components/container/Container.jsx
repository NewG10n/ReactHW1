import React from "react";

import { createUseStyles } from "react-jss";
const styles = createUseStyles({
  container: {
    display: "flex",
    height: "100vh",
  },
});

const Container = ({ children }) => {
  const classes = styles();

  return <div className={classes.container}>{children}</div>;
};

export default Container;
