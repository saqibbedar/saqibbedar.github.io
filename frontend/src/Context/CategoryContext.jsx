import { createContext, useState } from "react";

export const CategoryContext = createContext();

const CategoryProvider = ({children, initialCategory}) => {
    const [category, setCategory] = useState(initialCategory); 
  return (
    <CategoryContext.Provider value={{category, setCategory}}>
        {children}
    </CategoryContext.Provider>
  ) 
}

export default CategoryProvider
