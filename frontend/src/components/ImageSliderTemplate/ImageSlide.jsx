import './ImageSlider.css'
import HeroBtn from '../Reusable Components/HeroBtn/HeroBtn'

const ImageSlide = ({img, title, description, btnValue, link}) => {
  return (
    <>
        <img src={img}/>
        <div className="slide-img-content">
            <h1>{title}</h1>
            <p>{description}</p>
            <HeroBtn btnValue={btnValue} btnLink={link} btnBg={"#2563eb"} hoverColor={"#4285f4"} />
        </div>
    </>
  )
}

export default ImageSlide
