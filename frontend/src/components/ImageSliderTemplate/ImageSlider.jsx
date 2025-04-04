import { useEffect, useState } from 'react'
import './ImageSlider.css'

const ImageSlider = ({children}) => {
  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    const slides = document.querySelectorAll(".slide-show");
    slides.forEach((slide, index) =>{
      slide.style.left = `${index * 100}%`;
    });


  }, [])

  const goBack = (prev) => {
    const slides = document.querySelectorAll(".slide-show")
    setCounter(prev-1);
    if(counter < 0){
      setCounter(slides.length - 1);
    }
    slideImage();
  }

  const goNext = prev =>{
    const slides = document.querySelectorAll(".slide-show")
    setCounter(prev+1)
    if(counter === slides.length){
      setCounter(0);
    }
    slideImage();
  }

  const slideImage = ()=>{
    const slides = document.querySelectorAll(".slide-show");
    slides.forEach((slide, index)=>{
      slide.style.transform = `translateX(${counter * 100}%)`
    })
  }

  return (
    <div className='slide-container'>
        <div className="slide-show">
          {children}  
        </div>
      <div className="slide-btn">
        <button onClick={goBack}>Prev</button>
        <button onClick={goNext}>Next</button>
      </div>
    </div>
  )
}

export default ImageSlider
