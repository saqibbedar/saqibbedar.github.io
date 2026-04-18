import {
  SkeletonBlock,
  SkeletonButton,
  SkeletonCircle,
  SkeletonLine,
  SkeletonPill,
} from "../base";

export const CoverSectionSkeleton = () => (
  <section className="relative w-full pt-[64px] md:pt-[72px] h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden">
    <div className="h-full flex items-center pb-5">
      <div className="w-full h-full flex flex-col">
        <div className="relative flex-1 flex flex-col sm:flex-row justify-between gap-1 sm:gap-0">
          <div className="w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col justify-start pt-4 gap-3 sm:gap-4">
            <SkeletonLine className="h-[clamp(2rem,8vw,7rem)] w-[70%] sm:w-[65%]" />
            <SkeletonLine className="h-[clamp(2rem,8vw,7rem)] w-[82%] sm:w-[72%]" />
          </div>

          <div className="w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col justify-end gap-3 sm:gap-4">
            <SkeletonLine className="h-[clamp(2rem,8vw,7rem)] w-[76%] sm:ml-auto sm:w-[66%]" />
            <SkeletonLine className="h-[clamp(2rem,8vw,7rem)] w-[62%] sm:w-[58%]" />
          </div>
        </div>

        <div className="w-full mt-4 sm:mt-2 flex flex-row-reverse sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-2 w-[min(100%,280px)]">
            <SkeletonLine className="h-4 w-[92%]" />
            <SkeletonLine className="h-4 w-[64%]" />
          </div>

          <div className="flex items-center gap-3">
            <SkeletonButton className="w-10 h-10 sm:w-12 sm:h-12" />
            <SkeletonButton className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
        </div>
      </div>
    </div>

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="relative flex items-center justify-center">
        <SkeletonCircle className="w-[clamp(12rem,min(25vw,30vh),25rem)] aspect-square" />
        <div className="absolute bottom-[14.6%] right-[14.6%] translate-x-1/2 translate-y-1/2">
          <SkeletonButton className="w-14 h-14 sm:w-16 sm:h-16 rounded-full" />
        </div>
      </div>
    </div>
  </section>
);

export const SkillSectionSkeleton = () => (
  <section className="py-6 md:py-10 overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
    <div className="mb-4 sm:mb-6 flex gap-3 overflow-hidden">
      {Array.from({ length: 8 }).map((_, index) => (
        <SkeletonPill key={index} className="h-11 w-28 sm:h-12 sm:w-32" />
      ))}
    </div>
    <div className="flex gap-3 overflow-hidden">
      {Array.from({ length: 8 }).map((_, index) => (
        <SkeletonPill key={index} className="h-11 w-28 sm:h-12 sm:w-32" />
      ))}
    </div>
  </section>
);

export const ProjectSectionSkeleton = () => (
  <section className="py-10 md:py-16 lg:py-20">
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-8 md:mb-12 space-y-3">
      <SkeletonLine className="h-4 w-24" />
      <SkeletonLine className="h-8 w-[min(18rem,60vw)]" />
    </div>
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="w-full flex items-center justify-between border-b border-border-light py-5 sm:py-8 md:py-12 gap-6"
        >
          <div className="flex items-center gap-3 sm:gap-6 md:gap-8 flex-1 min-w-0">
            <SkeletonBlock className="hidden sm:block h-10 sm:h-12 md:h-14 lg:h-16 aspect-video w-24 sm:w-28" />
            <SkeletonLine className="h-8 sm:h-10 md:h-12 w-[min(32rem,65vw)]" />
          </div>
          <SkeletonLine className="h-4 w-16 shrink-0" />
        </div>
      ))}

      <SkeletonButton className="inline-block mt-6 h-12 w-32" />
    </div>
  </section>
);

export const BlogSectionSkeleton = () => (
  <section className="py-10 md:py-16 lg:py-20">
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-8 md:mb-12 space-y-3">
      <SkeletonLine className="h-4 w-24" />
      <SkeletonLine className="h-8 w-[min(18rem,60vw)]" />
    </div>
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="rounded-2xl border border-border bg-bg-card p-6 sm:p-7 space-y-4"
        >
          <div className="flex gap-2">
            <SkeletonPill className="h-6 w-24" />
            <SkeletonPill className="h-6 w-20" />
          </div>
          <SkeletonLine className="h-7 w-[92%]" />
          <SkeletonLine className="h-4 w-[85%]" />
          <SkeletonLine className="h-4 w-[70%]" />
          <div className="flex items-center justify-between border-t border-border pt-4">
            <div className="flex items-center gap-2">
              <SkeletonCircle className="w-6 h-6" />
              <SkeletonLine className="h-4 w-20" />
            </div>
            <SkeletonLine className="h-4 w-20" />
          </div>
        </div>
      ))}
      <SkeletonButton className="h-12 w-32 mt-2" />
    </div>
  </section>
);

export const ServiceSectionSkeleton = () => (
  <section className="py-10 md:py-16 lg:py-20">
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-8 md:mb-12 space-y-3">
      <SkeletonLine className="h-4 w-24" />
      <SkeletonLine className="h-8 w-[min(20rem,65vw)]" />
      <SkeletonLine className="h-4 w-[min(36rem,90vw)]" />
    </div>
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="p-6 bg-bg-card border border-border rounded-2xl space-y-4"
          >
            <SkeletonCircle className="w-14 h-14 rounded-xl" />
            <SkeletonLine className="h-6 w-40" />
            <SkeletonLine className="h-4 w-[90%]" />
            <SkeletonLine className="h-4 w-[80%]" />
            <div className="space-y-2 pt-2">
              <SkeletonLine className="h-3 w-[85%]" />
              <SkeletonLine className="h-3 w-[72%]" />
            </div>
            <SkeletonButton className="h-10 w-40" />
          </div>
        ))}
      </div>
      <SkeletonButton className="inline-block mt-8 h-12 w-40" />
    </div>
  </section>
);

export const FAQSectionSkeleton = () => (
  <section className="py-10 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
    <div className="max-w-3xl space-y-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="rounded-2xl border border-border bg-bg-card p-5 space-y-3"
        >
          <SkeletonLine className="h-5 w-[75%]" />
          <SkeletonLine className="h-4 w-[92%]" />
          <SkeletonLine className="h-4 w-[78%]" />
        </div>
      ))}
    </div>
    <SkeletonButton className="inline-block mt-6 h-12 w-40" />
  </section>
);

export const HomePageSkeleton = () => (
  <>
    <CoverSectionSkeleton />
    <SkillSectionSkeleton />
    <ProjectSectionSkeleton />
    <BlogSectionSkeleton />
    <ServiceSectionSkeleton />
    <FAQSectionSkeleton />
  </>
);
