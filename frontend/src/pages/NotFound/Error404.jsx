import { ErrorImages } from "@/assets/assets";
import { ResourceStatus } from "@/components/ui";

const Error404 = () => {
  return (
    <div style={{ marginTop: "-2rem" }}>
      <ResourceStatus
        img={ErrorImages.error_404}
        title={"Page not found"}
        titleColor={"var(--text-color)"}
        description={
          "Sorry, the page you are looking for does not exist. Please check the URL or return to the homepage."
        }
        isButton={true}
        btnValue={"Go to Homepage"}
        btnLink={"/Home"}
        btnBg={"var(--featured-bg)"}
        hoverColor={"#323336"}
      />
    </div>
  )
}

export default Error404;
