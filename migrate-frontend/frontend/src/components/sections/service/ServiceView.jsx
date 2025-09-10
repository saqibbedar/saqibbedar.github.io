import { useContext, useState } from "react";
import { GridContext } from "@/context";
import {
  Grid,
  GridItem,
  GridToggler
} from "@/components/templates/templates";
import { SectionHeader } from "@/components/layout";

const ServiceView = () => {
  const { isGrid } = useContext(GridContext);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="mt-[2rem] mb-[3rem] animate-[var(--transform)]">
      <SectionHeader
        layoutHeading={"Explore the best services I provide"}
        layoutDescription={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quibusdam. Vel placeat quos dolorem laborum. Sunt voluptatibus quas beatae, cupiditate omnis, eum itaque doloribus dolores eveniet minima nostrum laborum quidem."
        }
      />
      <GridToggler section_name={"Services"} isLoading={isLoading} />
      <Grid isGrid={isGrid} gridTempCol={"1fr 1fr 1fr 1fr"}>
        <GridItem
          link={"/"}
          title={"Frontend development"}
          img={
            "https://imageio.forbes.com/specials-images/imageserve/5f15a9ee916e8500077ad83b/0x0.jpg?format=jpg&width=1200"
          }
          tags={""}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </Grid>
    </div>
  );
};

export default ServiceView;
