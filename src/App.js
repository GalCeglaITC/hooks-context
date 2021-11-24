import "./App.css";
import CheckBoxFC from "./components/CheckBoxFC";
import { Divider, Typography } from "@mui/material";
import CheckBoxClass from "./components/CheckBoxClass";
import { AppContext } from "./context/context";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [toggleCount, setToggleCount] = useState(0);
  return (
    <AppContext.Provider
      value={{ toggleCount: toggleCount, setToggleCount: setToggleCount }}
    >
      <div className="App">
        <Counter />
        <CheckBoxFC />
        <Typography variant="body1">Function Component</Typography>
        <Divider />
        <CheckBoxClass />
        <Typography variant="body1">Class Component</Typography>
      </div>
    </AppContext.Provider>
  );
}

export default App;
