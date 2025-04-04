import HomePage_Layout from "../../components/HomePage_Layout/HomePage_Layout";
import GridProvider from "../../Context/GridContext";

const Home = () => {
  return (
    <>
      <GridProvider>
        <HomePage_Layout />
      </GridProvider>
    </>
  );
};

export default Home;
