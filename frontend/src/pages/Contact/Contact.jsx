import { ContactView } from "@/components/sections";
import { PageMeta } from "@/components/ui/PageMeta";
import { getPageMeta } from "@/assets";

const Contact = () => {
  const meta = getPageMeta("contact");

  return (
    <>
      <PageMeta {...meta} />
      <ContactView />
    </>
  );
};

export default Contact;
