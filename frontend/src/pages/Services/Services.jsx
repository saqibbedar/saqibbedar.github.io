import GridProvider from "@/context/GridContext";
import { ServiceLayout } from "@/components/layout/index";

const Services = () => {
  return (
    <>
      <title>Saqib Bedar | Services</title>
      <GridProvider>
        <ServiceLayout />
      </GridProvider>
    </>
  );
};

export default Services;
