import { createContext } from "react";

export const AppContext = createContext({
  toggleCount: 0,
  setToggleCount: () => {},
});
