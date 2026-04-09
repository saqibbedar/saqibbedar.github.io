import { BlogView } from "@/components/sections";
import { PageMeta } from "@/components/ui/PageMeta";
import { getPageMeta } from "@/assets";

const Blogs = () => {
  const meta = getPageMeta("blogs");

  return (
    <>
      <PageMeta {...meta} />
      <BlogView />
    </>
  );
};

export default Blogs;
