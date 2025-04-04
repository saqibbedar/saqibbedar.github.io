import "./GridToggler.css"
import React, { useEffect, useContext} from "react";
import { icons } from "../../../assets/assets";
import { GridContext } from "../../../Context/GridContext";

const GridToggler = ({ section_name, isLoading }) => {
  const { isGrid, setIsGrid } = useContext(GridContext);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 667) {
        setIsGrid(false);
      } else {
        setIsGrid(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsGrid]);

  return (
    <div className={isLoading ? "grid-toggler skeleton": "grid-toggler"}>
      <h1>{section_name}</h1>
      <div className="grid-toggler-btn">
        <button
          onClick={() => setIsGrid(!isGrid)}
          title={isGrid ? 'Landscape mode' : 'Grid mode'}
        >
          {isGrid ? <icons.filledGrid /> : <icons.unFilledGrid />}
        </button>
      </div>
    </div>
  );
};

export default GridToggler;