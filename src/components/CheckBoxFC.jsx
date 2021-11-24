import { Checkbox } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/context";

function CheckBoxFC(props) {
  const [isChecked, setIsChecked] = useState(false);

  const { setToggleCount } = useContext(AppContext);

  const handleChange = () => {
    setIsChecked((previous) => !previous);
    setToggleCount((previous) => previous + 1);
  };

  useEffect(() => {
    console.log("FC Rendered for the first time!");
  }, []);

  useEffect(() => {
    console.log("FC Check toggled!");
  }, [isChecked]);

  return <Checkbox checked={isChecked} onChange={handleChange} />;
}

export default CheckBoxFC;
