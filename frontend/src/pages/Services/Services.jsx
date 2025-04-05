import GridProvider from "@/context/GridContext";
import { ServiceLayout } from "@/components/layouts/layouts";

const Services = () => {
  return (
    <>
      <title>Saqib Bedar - Services</title>
      <GridProvider>
        <ServiceLayout />
      </GridProvider>
    </>
  );
};

export default Services;
