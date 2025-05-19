import { createContext, useState, useContext } from "react";

// 1. Create the Context 
export const CategoryContext = createContext();

// 2. Create custom hook for using the context
export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used with CategoryProvider");
  }
  return context;
}

// 3. Create Provider
export function CategoryProvider ({ children, initialCategory }) {
  const [category, setCategory] = useState(initialCategory);
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
