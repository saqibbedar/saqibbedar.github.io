import { useContent } from "@/context";
import { Faqs } from "@/components/ui";

const FAQSection = () => {
  const { faqs } = useContent();

  return (
    <Faqs
      items={faqs}
      sectionClassName="py-10 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
      listClassName="max-w-3xl flex flex-col gap-3 sm:gap-4"
    />
  );
};

export default FAQSection;
