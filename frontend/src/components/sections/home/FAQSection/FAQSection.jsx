import { useContent } from "@/context";
import { Faqs } from "@/components/ui";
import { Link } from "react-router-dom";

const FAQSection = () => {
  const { faqs } = useContent();
  const topFaqs = Array.isArray(faqs) ? faqs.slice(0, 4) : [];

  return (
    <>
      <Faqs
        items={topFaqs}
        sectionClassName="py-10 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
        listClassName="flex flex-col gap-3 sm:gap-4"
      />

      <div className="-mt-[12px] md:-mt-[35px] lg:-mt-[50px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-10 md:pb-16 lg:pb-20">
        <Link
          to="/faqs"
          className="inline-block px-6 py-3 text-sm sm:text-base font-semibold text-fg-primary bg-btn-primary-bg hover:bg-btn-primary-hover rounded-full transition-colors"
        >
          View More FAQs
        </Link>
      </div>
    </>
  );
};

export default FAQSection;
