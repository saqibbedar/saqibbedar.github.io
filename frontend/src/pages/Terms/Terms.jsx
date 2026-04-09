import { useContent } from "@/context";
import { PageMeta } from "@/components/ui/PageMeta";
import { PostLayout } from "@/components/ui/docs";
import { getPageMeta } from "@/assets";

const Terms = () => {
  const { termsDoc } = useContent();
  const meta = getPageMeta("terms");

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
