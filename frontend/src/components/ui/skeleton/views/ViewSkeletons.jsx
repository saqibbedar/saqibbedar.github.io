import {
  SkeletonBlock,
  SkeletonButton,
  SkeletonCircle,
  SkeletonLine,
  SkeletonPill,
} from "../base";

const ListHeaderSkeleton = ({ titleWidth = "w-[min(18rem,60vw)]" }) => (
  <div className="mb-8 md:mb-10 space-y-3">
    <SkeletonLine className="h-4 w-24" />
    <SkeletonLine className={`h-10 ${titleWidth}`} />
    <SkeletonLine className="h-4 w-[min(34rem,85vw)]" />
  </div>
);

const CardSkeleton = () => (
  <div className="rounded-2xl border border-border bg-bg-card p-6 sm:p-7 space-y-4">
    <div className="flex flex-wrap gap-2">
      <SkeletonPill className="h-6 w-24" />
      <SkeletonPill className="h-6 w-20" />
    </div>
    <SkeletonLine className="h-7 w-[92%]" />
    <SkeletonLine className="h-4 w-[88%]" />
    <SkeletonLine className="h-4 w-[74%]" />
    <div className="flex items-center justify-between border-t border-border pt-4">
      <div className="flex items-center gap-2">
        <SkeletonCircle className="w-6 h-6" />
        <SkeletonLine className="h-4 w-24" />
      </div>
      <SkeletonLine className="h-4 w-20" />
    </div>
  </div>
);

export const BlogViewSkeleton = () => (
  <section className="pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
    <div className="max-w-6xl mx-auto">
      <ListHeaderSkeleton titleWidth="w-[min(14rem,40vw)]" />
      <div className="flex items-center gap-2 py-4 mb-4 overflow-x-auto hide-scrollbar">
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonPill key={index} className="h-10 w-28" />
        ))}
      </div>
      <div className="flex items-center gap-2 py-4 mb-8">
        <SkeletonButton className="h-10 w-24" />
        <SkeletonButton className="h-10 w-24" />
      </div>
      <div className="grid grid-cols-1 gap-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    </div>
  </section>
);

export const ProjectViewSkeleton = () => (
  <section className="pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
    <div className="max-w-6xl mx-auto">
      <ListHeaderSkeleton titleWidth="w-[min(16rem,45vw)]" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-border bg-bg-card overflow-hidden space-y-4"
          >
            <SkeletonBlock className="h-44 sm:h-48 rounded-none border-0" />
            <div className="p-5 sm:p-6 space-y-3">
              <div className="flex gap-2 flex-wrap">
                <SkeletonPill className="h-5 w-16" />
                <SkeletonPill className="h-5 w-20" />
              </div>
              <SkeletonLine className="h-6 w-[90%]" />
              <SkeletonLine className="h-4 w-[84%]" />
              <SkeletonLine className="h-4 w-[70%]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const CoursesViewSkeleton = () => (
  <section className="pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
    <div className="max-w-6xl mx-auto">
      <ListHeaderSkeleton titleWidth="w-[min(16rem,45vw)]" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-border bg-bg-card overflow-hidden space-y-4"
          >
            <SkeletonBlock className="h-44 sm:h-48 rounded-none border-0" />
            <div className="p-5 sm:p-6 space-y-3">
              <div className="flex gap-2 flex-wrap">
                <SkeletonPill className="h-5 w-20" />
                <SkeletonPill className="h-5 w-16" />
              </div>
              <SkeletonLine className="h-6 w-[90%]" />
              <SkeletonLine className="h-4 w-[84%]" />
              <div className="flex gap-4 pt-2">
                <SkeletonLine className="h-4 w-16" />
                <SkeletonLine className="h-4 w-16" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ServicesViewSkeleton = () => (
  <section className="pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
    <div className="max-w-6xl mx-auto">
      <ListHeaderSkeleton titleWidth="w-[min(18rem,52vw)]" />
      <div className="flex items-center gap-2 py-6 overflow-x-auto hide-scrollbar">
        {Array.from({ length: 7 }).map((_, index) => (
          <SkeletonPill key={index} className="h-10 w-28" />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-border bg-bg-card p-6 sm:p-8 space-y-4"
          >
            <div className="flex items-start justify-between">
              <SkeletonCircle className="w-14 h-14 rounded-xl" />
              <SkeletonPill className="h-6 w-20" />
            </div>
            <SkeletonLine className="h-6 w-[82%]" />
            <SkeletonLine className="h-4 w-[90%]" />
            <SkeletonLine className="h-4 w-[72%]" />
            <div className="space-y-2 pt-2">
              <SkeletonLine className="h-3 w-[70%]" />
              <SkeletonLine className="h-3 w-[60%]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ProjectDetailSkeleton = () => (
  <section className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
    <div className="max-w-6xl mx-auto space-y-8">
      <SkeletonLine className="h-4 w-32" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-4 order-2 lg:order-1">
          <div className="flex gap-2 flex-wrap">
            <SkeletonPill className="h-7 w-20" />
            <SkeletonPill className="h-7 w-24" />
          </div>
          <SkeletonLine className="h-10 w-[min(28rem,85vw)]" />
          <SkeletonLine className="h-5 w-[90%]" />
          <SkeletonLine className="h-5 w-[78%]" />
          <SkeletonLine className="h-5 w-[64%]" />
          <div className="flex flex-wrap gap-3 pt-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <SkeletonPill key={index} className="h-9 w-24" />
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <SkeletonButton className="h-11 w-36" />
            <SkeletonButton className="h-11 w-36" />
          </div>
        </div>
        <SkeletonBlock className="order-1 lg:order-2 h-[22rem] rounded-2xl" />
      </div>
      <SkeletonBlock className="h-56 rounded-2xl" />
    </div>
  </section>
);

export const BlogDetailSkeleton = () => (
  <section className="pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
    <div className="max-w-4xl mx-auto space-y-6">
      <SkeletonLine className="h-4 w-32" />
      <SkeletonLine className="h-11 w-[min(32rem,92vw)]" />
      <SkeletonLine className="h-5 w-[min(40rem,95vw)]" />
      <SkeletonBlock className="h-10 rounded-2xl" />
      <SkeletonBlock className="h-[28rem] rounded-2xl" />
      <SkeletonBlock className="h-40 rounded-2xl" />
    </div>
  </section>
);

export const CourseDetailSkeleton = () => (
  <section className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
    <div className="max-w-6xl mx-auto space-y-8">
      <SkeletonLine className="h-4 w-32" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-4 order-2 lg:order-1">
          <div className="flex gap-2 flex-wrap">
            <SkeletonPill className="h-7 w-24" />
            <SkeletonPill className="h-7 w-20" />
            <SkeletonPill className="h-7 w-20" />
          </div>
          <SkeletonLine className="h-10 w-[min(28rem,85vw)]" />
          <SkeletonLine className="h-5 w-[90%]" />
          <SkeletonLine className="h-5 w-[78%]" />
          <div className="flex flex-wrap gap-4 pt-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <SkeletonPill key={index} className="h-6 w-24" />
            ))}
          </div>
          <div className="flex items-center gap-3 pt-2">
            <SkeletonCircle className="w-12 h-12" />
            <div className="space-y-2">
              <SkeletonLine className="h-4 w-32" />
              <SkeletonLine className="h-3 w-40" />
            </div>
          </div>
          <div className="flex gap-4 pt-2">
            <SkeletonButton className="h-11 w-36" />
            <SkeletonButton className="h-11 w-44" />
          </div>
        </div>
        <SkeletonBlock className="order-1 lg:order-2 h-[24rem] rounded-2xl" />
      </div>
      <SkeletonBlock className="h-40 rounded-2xl" />
    </div>
  </section>
);

export const SearchViewSkeleton = () => (
  <section className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
    <div className="max-w-5xl mx-auto">
      <div className="mb-8 space-y-3">
        <SkeletonLine className="h-10 w-[min(14rem,45vw)]" />
        <SkeletonLine className="h-4 w-[min(32rem,90vw)]" />
      </div>

      <div className="flex items-center gap-2 py-6 overflow-x-auto hide-scrollbar mb-2">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonPill key={index} className="h-10 w-28" />
        ))}
      </div>

      <div className="space-y-8">
        {Array.from({ length: 3 }).map((_, sectionIndex) => (
          <div key={sectionIndex} className="space-y-2">
            <div className="flex items-center justify-between">
              <SkeletonLine className="h-4 w-24" />
              <SkeletonLine className="h-3 w-8" />
            </div>
            <div className="space-y-1">
              {Array.from({ length: 2 }).map((_, rowIndex) => (
                <div
                  key={rowIndex}
                  className="rounded-xl border border-border bg-bg-card p-4"
                >
                  <div className="flex items-start gap-3.5">
                    <SkeletonBlock className="w-14 h-14 rounded-lg" />
                    <div className="flex-1 space-y-2">
                      <SkeletonLine className="h-5 w-[70%]" />
                      <SkeletonLine className="h-4 w-[88%]" />
                      <SkeletonLine className="h-4 w-[66%]" />
                    </div>
                    <SkeletonLine className="h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-transparent pointer-events-none z-40" />

    <div className="fixed bottom-0 left-0 right-0 z-40 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 bg-bg-card border border-border rounded-full px-4 py-3 shadow-xl shadow-black/10">
          <SkeletonCircle className="w-5 h-5" />
          <SkeletonLine className="h-5 flex-1" />
          <SkeletonCircle className="w-8 h-8" />
          <SkeletonCircle className="w-9 h-9" />
        </div>
      </div>
    </div>
  </section>
);
