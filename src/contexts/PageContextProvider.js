import React, { createContext } from "react";
import useAllAppData from "../hooks/useAllAppData";

export const PageContext = createContext();
const PageContextProvider = ({ children }) => {
  const allValue = useAllAppData();
  return (
    <PageContext.Provider value={allValue}>{children}</PageContext.Provider>
  );
};

export default PageContextProvider;
