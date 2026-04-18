import { SkeletonBlock, SkeletonLine, SkeletonPill } from "../base";

export const DocPageSkeleton = () => (
  <section className="pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <SkeletonBlock className="w-12 h-12 rounded-xl" />
        <SkeletonLine className="h-8 w-[min(18rem,55vw)]" />
      </div>
      <SkeletonLine className="h-4 w-[60%]" />
      <div className="flex flex-wrap gap-3">
        <SkeletonPill className="h-8 w-32" />
        <SkeletonPill className="h-8 w-28" />
      </div>
      <SkeletonBlock className="h-20 rounded-2xl" />
      <SkeletonBlock className="h-[32rem] rounded-2xl" />
    </div>
  </section>
);
