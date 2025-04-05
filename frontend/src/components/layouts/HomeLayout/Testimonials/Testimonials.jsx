import { useRef } from "react";
import { icons, testimonials } from "@/assets/assets";
import { TestimonialsCard } from "@/components/reusable/reusable";

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="section-info">
        <h1>Testimonials</h1>
        <div className="section-info-navigation-btns">
          <button onClick={() => scroll("left")}>
            <icons.leftArrow />
          </button>
          <button onClick={() => scroll("right")}>
            <icons.rightArrow />
          </button>
        </div>
      </div>
      <div
        className="mb-[3rem] flex gap-[20px] overflow-x-scroll p-[6px]"
        ref={scrollRef}
      >
        {testimonials.map((data, index) => (
          <TestimonialsCard
            key={index}
            img={data.img}
            link={data.link}
            name={data.name}
            designation={data.designation}
            des={data.description}
          />
        ))}
      </div>
    </>
  );
};

export default Testimonials;
