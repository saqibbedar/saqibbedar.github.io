import "./Services.css";
import ServicesPage_Layout from "../../components/ServicesPage_Layout/ServicesPage_Layout";
import GridProvider from "../../Context/GridContext";

const Services = () => {
  return (
    <>
      <GridProvider>
        <ServicesPage_Layout />
      </GridProvider>
    </>
  );
};

export default Services;
