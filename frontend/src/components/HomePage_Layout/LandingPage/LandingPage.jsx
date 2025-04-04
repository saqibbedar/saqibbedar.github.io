import "./LandingPage.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { slideContent } from "@/assets/assets";
 
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import HeroBtn from "@/components/Reusable Components/HeroBtn/HeroBtn";

const LandingPage = () => {
 

  return (
    <div className="landing-Page-wrapper">
      <div className="landing-page">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          effect={"fade"}
          autoplay={{ delay: 8500, disableOnInteraction: false }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          className="mySwiper"
        >
        {slideContent.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
            <img src={item.img} alt="slide" />
            <div className="content">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <HeroBtn btnValue={item.btnValue} btnLink={"/"} btnBg={"#2563eb"} hoverColor={"#4285f4"} />
            </div>
            </div>
          </SwiperSlide>
        ))}

        </Swiper>
      </div>
    </div>
  );
};

export default LandingPage;
