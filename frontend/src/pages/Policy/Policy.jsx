import { useContent } from "@/context";
import { PageMeta } from "@/components/ui/PageMeta";
import { PostLayout } from "@/components/ui/docs";
import { getPageMeta } from "@/assets";

const Policy = () => {
  const { policyDoc } = useContent();
  const meta = getPageMeta("policy");

  return (
    <>
      <PageMeta {...meta} />
      <PostLayout
        markdown={policyDoc || ""}
        showHeader={false}
        relatedLinks={[
          { title: "Terms & Conditions", path: "/terms-conditions" },
          { title: "Sitemap", path: "/sitemap" },
        ]}
      />
    </>
  );
};

export default Policy;
