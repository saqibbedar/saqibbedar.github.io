import { ServiceView } from "@/components/sections";
import { PageMeta } from "@/components/ui";
import { getPageMeta } from "@/assets";

const Services = () => {
  const meta = getPageMeta("services");

  return (
    <>
      <PageMeta {...meta} />
      <ServiceView />
    </>
  );
};

export default Services;
