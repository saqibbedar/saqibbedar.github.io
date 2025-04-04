import TestimonialsCard from '../../Reusable Components/TestimonialsCard/TestimonialsCard'
import './Testimonials.css'
import { icons, TestimonialsData } from '../../../assets/assets'
import React, {useRef} from 'react'

const Testimonials = () => {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="section-info">
        <h1>Testimonials</h1>
        <div className="section-info-navigation-btns">
          <button onClick={() => scroll('left')}><icons.leftArrow/></button>
          <button onClick={() => scroll('right')}><icons.rightArrow/></button>
        </div>
      </div>
      <div className="testimonials-wrapper"  ref={scrollRef}>
        {TestimonialsData.map((data, index) =>(
          <TestimonialsCard key={index} img={data.img} link={data.link} name={data.name} designation={data.designation} des={data.description}/>
        ))
        }
      </div>
    </div>
  )
}

export default Testimonials
