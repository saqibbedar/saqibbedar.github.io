import "./Grid.css";
import React, { useState, useEffect } from "react";

const Grid = ({ isGrid, gridTempCol, children }) => {
  const [gridTemplateColumns, setGridTemplateColumns] = useState(() =>
    window.innerWidth <= 767 ? "1fr 1fr" : gridTempCol
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setGridTemplateColumns("1fr 1fr");
      } else {
        setGridTemplateColumns(gridTempCol);
      }
    }; 

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [gridTempCol]);

  return (
    <div
      className={isGrid ? "grid" : "grid active-landScape-mode"}
      style={{ gridTemplateColumns }}
    >
      {children}
    </div>
  );
};

export default Grid;
