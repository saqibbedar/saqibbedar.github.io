import "./AboutSkillSection.css";
import { useContext } from "react";
import { GridContext } from "@/context/GridContext";
import { Grid, GridToggler } from "@/components/templates/templates";

const AboutSkillSection = () => {
  const { isGrid } = useContext(GridContext);

  return (
    <div className="about-sec-skill-wrapper">
      <GridToggler section_name={"Skills"} />
      <Grid isGrid={isGrid} gridTempCol={"1fr 1fr 1fr"}>
        <h1>Hello from skills</h1>
      </Grid>
    </div>
  );
};

export default AboutSkillSection;
