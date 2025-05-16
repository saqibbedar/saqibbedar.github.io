import GridProvider from "@/context/GridContext";
import { ServiceView } from "@/components/sections";

const Services = () => {
  return (
    <>
      <title>Saqib Bedar | Services</title>
      <GridProvider>
        <ServiceView />
      </GridProvider>
    </>
  );
};

export default Services;
