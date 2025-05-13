import "swiper/css";
import "./LandingPage.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { slideContent } from "@/assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/ui";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

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
                <div className="content left-[8%] bottom-[10%] media2:left-[5%] media2:bottom-[11%]">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <Button
                    btnValue={item.btnValue}
                    btnLink={"/"}
                    btnBg={"#2563eb"}
                    hoverColor={"#4285f4"}
                  />
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
