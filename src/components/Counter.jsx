import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../context/context";

function Counter() {
  const { toggleCount } = useContext(AppContext);

  return <Typography variant="h1">Times Toggled: {toggleCount}</Typography>;
}

export default Counter;
