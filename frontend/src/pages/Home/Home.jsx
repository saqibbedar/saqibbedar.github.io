import { HomeView } from "@/components/sections";
import { PageMeta } from "@/components/ui/PageMeta";
import { getPageMeta } from "@/assets";

const Home = () => {
  const meta = getPageMeta("home");

  return (
    <>
      <PageMeta {...meta} />
      <HomeView />
    </>
  );
};

export default Home;
