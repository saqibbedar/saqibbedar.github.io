import { GridProvider } from "@/context";
import { HomeView } from "@/components/sections";
import { useSmoothTransform } from "@/hooks";

const Home = () => {
  
  useSmoothTransform({className: "homepage"});

  return (
    <div className="homepage">
      <meta name="author" content="Saqib Bedar" />
      <meta name="keywords" content="Saqib Bedar, JavaScript, semantic markup, html" />
      <meta name="description" content="Saqib Bedar" />
      <title>Saqib Bedar | Home</title>
      <GridProvider>
        <HomeView />
      </GridProvider>
    </div>
  );
};

export default Home;
