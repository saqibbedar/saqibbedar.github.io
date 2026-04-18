import { useContent } from "@/context";
import { PageMeta } from "@/components/ui/PageMeta";
import { PostLayout } from "@/components/ui/docs";
import { getPageMeta } from "@/assets";
import { DocPageSkeleton } from "@/components/ui/skeleton";

const Policy = () => {
  const { policyDoc, loading } = useContent();
  const meta = getPageMeta("policy");

  if (loading) {
    return <DocPageSkeleton />;
  }

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
