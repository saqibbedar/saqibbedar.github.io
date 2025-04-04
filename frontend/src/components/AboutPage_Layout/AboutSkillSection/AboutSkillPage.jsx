import Grid from "../../GridTemplate/Grid/Grid";
import GridToggler from "../../GridTemplate/GridToggler/GridToggler";
import "./AboutSkillSection.css";
import { GridContext } from "../../../Context/GridContext";
import { useContext} from "react";

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


