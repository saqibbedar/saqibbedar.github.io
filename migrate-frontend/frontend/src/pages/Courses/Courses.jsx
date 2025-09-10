import { ErrorImages } from '@/assets/assets';
import { ResourceStatus } from '@/components/ui';

const Courses = () => {
  return (
    <>
      <title>Saqib Bedar | Courses</title>
      <ResourceStatus img={ErrorImages.coming_soon} title={"Courses are coming soon!"} titleColor={"var(--text-color)"} description={"Stay tuned, courses are coming soon, till then visit our YouTube channel for latest updates."} isButton={true} btnValue={"Go to Channel"} btnLink={"/"} hoverColor={"#323336"} />
      
    </>
  )
};

export default Courses;
