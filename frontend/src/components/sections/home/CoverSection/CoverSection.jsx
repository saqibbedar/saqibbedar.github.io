const STYLES = {
  responsive: {
    maxPx: "px-8", // maxPaddingInline
    minPx: "px-4", // minPaddingInline
    maxMx: "mx-8",
    minMx: "mx-4"
  },
};

const CoverSection = () => {

  return (
    <div className="relative min-h-[100dvh] h-[100dvh] overflow-hidden">

      {/* Content */}
      <div className="h-full flex place-items-center z-10">
        <div className="h-[80dvh] w-full">
          <div
            className={`${STYLES.responsive.maxPx} relative h-full w-full flex overflow-hidden`}
          >
            {/* first head */}
            <div className="w-full md:w-1/2 flex flex-col justify-start gap-1">
              <div className="flex justify-end">
                  <div
                    className="text-[3rem] md:text-[8.5vw] md:leading-20 lg:text-[8vw] lg:leading-24 xl:text-[7vw] xl:leading-[8.5rem] text-nowrap font-semibold text-[var(--dt-sec-fg)]"
                  >
                    Developer
                  </div>
              </div>
              <div className="flex justify-start">
                <div
                    className="text-[3rem] md:text-[8.5vw] md:leading-20 lg:text-[8vw] lg:leading-24 xl:text-[7vw] xl:leading-[8.5rem] text-nowrap font-semibold text-[var(--dt-sec-fg)]"
                  >
                    Educator
                  </div>
              </div>
            </div>
            {/* second head */}
            <div className="w-full md:w-1/2 flex flex-col justify-end gap-1">
              <div className="flex justify-end">
                  <div
                    className="text-[3rem] md:text-[8.5vw] md:leading-20 lg:text-[8vw] lg:leading-24 xl:text-[7vw] xl:leading-[8.5rem] text-nowrap font-semibold text-[var(--dt-sec-fg)]"
                  >
                    Innovation
                  </div>
              </div>
              <div className="flex justify-start">
                  <div
                    className="text-[3rem] md:text-[8.5vw] md:leading-20 lg:text-[8vw] lg:leading-24 xl:text-[7vw] xl:leading-[8.5rem] text-nowrap font-semibold text-[var(--dt-sec-fg)]"
                  >
                    Architect
                  </div>
              </div>
            </div>
          </div>
          <div
            className={`${STYLES.responsive.maxMx} mt-6 flex items-center justify-between`}
          >
            <div className="flex flex-col">
              <span className="font-semibold tracking-wider">
                Available for full time & Freelance
              </span>
              <span className="font-semibold tracking-wider">
                Work from Feb {"'23"}
              </span>
            </div>
            <div>Scroll Down</div>
          </div>
        </div>
      </div>

      {/* focused Image (center) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              className="sm:h-65 sm:w-65 md:h-75 md:w-75 lg:h-85 lg:w-85 xl:h-96 xl:w-96 overflow-hidden rounded-full opacity-75"
            >
              <img
                src="/images/profile2.png"
                className="w-inherit h-inherit object-cover object-center filter grayscale rounded-full"
                alt="Saqib Bedar"
              />
            </div>
      </div>
    </div>
  );
};

export default CoverSection;
