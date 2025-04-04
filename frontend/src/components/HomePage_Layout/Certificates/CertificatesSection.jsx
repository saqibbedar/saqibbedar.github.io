import './CertificatesSection.css'
import { certificates, icons } from "../../../assets/assets"
import Card from "../../Reusable Components/Card/Card"
import React, { useRef} from "react";

const CertificatesSection = () => { 

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="CardSection-Wrapper">

      <div className="section-info">
        <h1>Certificates</h1>
        <div className="section-info-navigation-btns">
          <button onClick={() => scroll('left')}><icons.leftArrow/></button>
          <button onClick={() => scroll('right')}><icons.rightArrow/></button>
        </div>
      </div>

      <div className="posts" ref={scrollRef}>
          {
            certificates.map((item, index)=>(
              <Card key={index} img={item.cer_img} title={item.title} description={item.des} profileImg={item.org_logo} name={item.org_name} url={item.verify_link}/>
            ))
          }
      </div>

    </div>
  )
}

export default CertificatesSection
