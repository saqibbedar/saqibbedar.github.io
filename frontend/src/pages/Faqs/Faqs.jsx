import { useContent } from "@/context";
import { Faqs } from "@/components/ui";

const FAQs = () => {
  const { faqs } = useContent();

  return (
    <div className="pt-[3.5rem] sm:pt-16">
      <Faqs
        items={faqs}
        sectionClassName="py-10 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
        listClassName="lg:max-w-3xl flex flex-col gap-3 sm:gap-4"
      />
    </div>
  );
};

export default FAQs;
