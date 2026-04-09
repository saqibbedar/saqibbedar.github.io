import { useContent } from "@/context";
import { Faqs } from "@/components/ui";

const FAQSection = () => {
  const { faqs } = useContent();

  return (
    <Faqs
      items={faqs}
      sectionClassName="py-10 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
      listClassName="flex flex-col gap-3 sm:gap-4"
    />
  );
};

export default FAQSection;
