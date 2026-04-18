import { useContent } from "@/context";
import { PageMeta } from "@/components/ui/PageMeta";
import { PostLayout } from "@/components/ui/docs";
import { getPageMeta } from "@/assets";
import { DocPageSkeleton } from "@/components/ui/skeleton";

const Terms = () => {
  const { termsDoc, loading } = useContent();
  const meta = getPageMeta("terms");

  if (loading) {
    return <DocPageSkeleton />;
  }

  return (
    <>
      <PageMeta {...meta} />
      <PostLayout
        markdown={termsDoc || ""}
        showHeader={false}
        relatedLinks={[
          { title: "Privacy Policy", path: "/privacy-policy" },
          { title: "Sitemap", path: "/sitemap" },
        ]}
      />
    </>
  );
};

export default Terms;
