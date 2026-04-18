import {
  SkeletonBlock,
  SkeletonButton,
  SkeletonCircle,
  SkeletonLine,
  SkeletonPill,
} from "../base";

export const HeroSectionSkeleton = () => (
  <section className="pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 lg:gap-16">
      <SkeletonBlock className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl" />
      <div className="flex-1 text-center md:text-left space-y-4">
        <SkeletonLine className="h-4 w-28 mx-auto md:mx-0" />
        <SkeletonLine className="h-12 w-[min(30rem,85vw)] mx-auto md:mx-0" />
        <SkeletonLine className="h-4 w-[92%] mx-auto md:mx-0" />
        <SkeletonLine className="h-4 w-[84%] mx-auto md:mx-0" />
        <SkeletonLine className="h-4 w-[70%] mx-auto md:mx-0" />
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
          <SkeletonButton className="h-11 w-36" />
          <SkeletonButton className="h-11 w-28" />
          <div className="flex items-center gap-2">
            <SkeletonCircle className="w-11 h-11" />
            <SkeletonCircle className="w-11 h-11" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const EducationSectionSkeleton = () => (
  <section className="py-10 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
    <div className="mb-8 md:mb-12 space-y-3">
      <SkeletonLine className="h-4 w-24" />
      <SkeletonLine className="h-8 w-[min(22rem,75vw)]" />
    </div>
    <div className="max-w-3xl space-y-8">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="flex gap-4 sm:gap-6">
          <SkeletonCircle className="w-8 h-8 sm:w-10 sm:h-10" />
          <div className="flex-1 space-y-3 pb-8 sm:pb-10">
            <SkeletonPill className="h-7 w-24" />
            <SkeletonLine className="h-6 w-[min(28rem,80vw)]" />
            <SkeletonLine className="h-4 w-[60%]" />
            <SkeletonLine className="h-4 w-[88%]" />
            <div className="flex gap-2 mt-3">
              <SkeletonBlock className="w-12 h-12" />
              <SkeletonBlock className="w-12 h-12" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export const CertificatesSectionSkeleton = () => (
  <section className="py-10 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
    <div className="mb-8 md:mb-12 space-y-3">
      <SkeletonLine className="h-4 w-24" />
      <SkeletonLine className="h-8 w-[min(22rem,75vw)]" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="rounded-2xl border border-border bg-bg-card overflow-hidden space-y-4 p-5"
        >
          <SkeletonBlock className="h-40 sm:h-48 rounded-xl" />
          <div className="flex items-center gap-2">
            <SkeletonCircle className="w-5 h-5" />
            <SkeletonLine className="h-4 w-24" />
          </div>
          <SkeletonLine className="h-5 w-[88%]" />
          <SkeletonLine className="h-4 w-[78%]" />
          <SkeletonLine className="h-4 w-28" />
        </div>
      ))}
    </div>
  </section>
);

export const BootcampsAndEventsSectionSkeleton = () => (
  <section className="py-10 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
    <div className="mb-8 md:mb-12 space-y-3">
      <SkeletonLine className="h-4 w-24" />
      <SkeletonLine className="h-8 w-[min(24rem,80vw)]" />
    </div>
    <div className="max-w-3xl space-y-8">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="flex gap-4 sm:gap-6">
          <SkeletonCircle className="w-8 h-8 sm:w-10 sm:h-10" />
          <div className="flex-1 space-y-3 pb-8 sm:pb-10 pt-1">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between">
              <SkeletonPill className="h-7 w-32" />
              <SkeletonPill className="h-7 w-24" />
            </div>
            <SkeletonLine className="h-6 w-[min(28rem,82vw)]" />
            <SkeletonLine className="h-4 w-[88%]" />
            <SkeletonLine className="h-4 w-[72%]" />
            <SkeletonLine className="h-4 w-[60%]" />
            <SkeletonBlock className="h-40 rounded-2xl" />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export const AboutPageSkeleton = () => (
  <>
    <HeroSectionSkeleton />
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6">
      <div className="flex gap-2 overflow-x-auto hide-scrollbar">
        {Array.from({ length: 4 }).map((_, index) => (
          <SkeletonPill key={index} className="h-10 w-44" />
        ))}
      </div>
    </div>
    <EducationSectionSkeleton />
  </>
);
