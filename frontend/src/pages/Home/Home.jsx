import GridProvider from "@/context/GridContext";
import { HomeLayout } from "@/components/layout/index";

const Home = () => {
  return (
    <>
      <meta name="author" content="Saqib Bedar" />
      <meta name="keywords" content="Saqib Bedar, JavaScript, semantic markup, html" />
      <meta name="description" content="Saqib Bedar" />
      <title>Saqib Bedar | Home</title>
      <GridProvider>
        <HomeLayout />
      </GridProvider>
    </>
  );
};

export default Home;
