import { createContext, useState } from "react";

export const GridContext = createContext();

export function GridProvider({ children }) {
  const [isGrid, setIsGrid] = useState(() => window.innerWidth > 767);

  return (
    <GridContext.Provider value={{ isGrid, setIsGrid }}>
      {children}
    </GridContext.Provider>
  );
};
