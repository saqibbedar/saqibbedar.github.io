import { createContext, useContext } from "react";

export const ContentContext = createContext(null);

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within ContentProvider");
  }
  return context;
};
