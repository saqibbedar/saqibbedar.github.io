import { useRef } from "react";
import { icons, testimonials } from "@/assets/assets";
import { TestimonialCard } from "@/components/ui";

const TestimonialsSection = () => {
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
        {testimonials.map((reviewer) => (
          <TestimonialCard
            key={reviewer._id}
            image={reviewer.image}
            linkedInUrl={reviewer.linkedInUrl}
            name={reviewer.name}
            designation={reviewer.designation}
            des={reviewer.description}
          />
        ))}
      </div>
    </>
  );
};

export default TestimonialsSection;
