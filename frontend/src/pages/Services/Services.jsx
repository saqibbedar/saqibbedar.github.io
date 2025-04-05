import GridProvider from "@/context/GridContext";
import { ServiceLayout } from "@/components/layouts/layouts";

const Services = () => {
  return (
    <>
      <GridProvider>
        <ServiceLayout />
      </GridProvider>
    </>
  );
};

export default Services;
