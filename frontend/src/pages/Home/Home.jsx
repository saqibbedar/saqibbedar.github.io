import GridProvider from "@/context/GridContext";
import { HomeLayout } from "@/components/layouts/layouts";

const Home = () => {
  return (
    <>
      <GridProvider>
        <HomeLayout />
      </GridProvider>
    </>
  );
};

export default Home;
