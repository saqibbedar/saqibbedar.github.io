import { useState } from "react";
import { icons, faqs } from "@/assets/assets";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="FAQs-wrapper flex flex-col gap-3 mb-10">
      <div className="section-info">
        <h1>FAQs</h1>
      </div>
      {faqs.map((faq, index) => (
        <div className="FAQs-box" key={faq._id}>
          <div
            className="FAQs-question-box flex justify-between items-center cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <h1 className="text-[1.2rem] font-medium">{faq.question}</h1>
            <button className="p-[10px] rounded-full cursor-pointer bg-[#d3d3d3]">
              {openIndex === index ? (
                <icons.arrowUp fill="#6e6e73" className="h-5 w-5" />
              ) : (
                <icons.arrowDown fill="#6e6e73" className="h-5 w-5" />
              )}
            </button>
          </div>
          <p
            className={
              openIndex === index
                ? "font-[400] text-[.92rem] text-[var(--text-color)] block"
                : "hidden"
            }
          >
            {faq.ans}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
