import React, { createContext, useState } from 'react'

export const GridContext = createContext();

const GridProvider = ({children}) => {
    
    const [isGrid, setIsGrid] = useState(()=> window.innerWidth > 767);

  return (
    <GridContext.Provider value={{isGrid, setIsGrid}}>
        {children}
    </GridContext.Provider>
  )
}

export default GridProvider
