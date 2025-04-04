import { Link } from "react-router-dom"
import "../Grid/Grid.css"
import { useEffect} from "react"

const GridItem = ({link, title, img, isLoading, setIsLoading}) => {

  useEffect(() => {
    setIsLoading(true);
  }, [link, title, img, setIsLoading]); 

  const handleImageLoad = () => {
    setIsLoading(false);
  }

  return (
    <Link to={link} className='grid-item' style={{gap: isLoading ? "25px" : ""}}>
      <p className={isLoading && "skeleton"}>• {title}</p>
        <div className={isLoading ? "grid-item-img-container skeleton": "grid-item-img-container"}>
          <img src={img} onLoad={handleImageLoad}/>
        </div>
    </Link>
  )
}

export default GridItem
