const CoverSection = () => {

  return (
    <div className="px-3 md:px-8 relative min-h-[100vh] h-[100vh] overflow-hidden">

      {/* Content */}
      <div className="h-full flex place-items-center z-10">
        <div className="h-[80vh] w-full">
          <div
            className={`relative h-full w-full flex flex-col sm:flex-row justify-between overflow-hidden`}
          >
            {/* first head */}
            <div className="py-4 w-full h-1/2 sm:h-full sm:w-1/2 flex flex-col justify-start">
              <div className="flex justify-end">
                  <div
                    className="text-[2.8rem] leading-12 md:text-[8.5vw] md:leading-20 lg:text-[8vw] lg:leading-24 xl:text-[7vw] xl:leading-[8.5rem] text-nowrap font-semibold text-[var(--dt-sec-fg)]"
                  >
                    Developer
                  </div>
              </div>
              <div className="flex justify-start">
                <div
                    className="text-[2.8rem] leading-12 md:text-[8.5vw] md:leading-20 lg:text-[8vw] lg:leading-24 xl:text-[7vw] xl:leading-[8.5rem] text-nowrap font-semibold text-[var(--dt-sec-fg)]"
                  >
                    Educator
                  </div>
              </div>
            </div>
            {/* second head */}
            <div className="w-full h-1/2 sm:h-full sm:w-1/2 flex flex-col justify-end">
              <div className="flex justify-end">
                  <div
                    className="text-[2.8rem] leading-12 md:text-[8.5vw] md:leading-20 lg:text-[8vw] lg:leading-24 xl:text-[7vw] xl:leading-[8.5rem] text-nowrap font-semibold text-[var(--dt-sec-fg)]"
                  >
                    Innovation
                  </div>
              </div>
              <div className="flex justify-start">
                  <div
                    className="text-[2.8rem] leading-12 md:text-[8.5vw] md:leading-20 lg:text-[8vw] lg:leading-24 xl:text-[7vw] xl:leading-[8.5rem] text-nowrap font-semibold text-[var(--dt-sec-fg)]"
                  >
                    Architect
                  </div>
              </div>
            </div>
          </div>
          <div
            className={`w-full mt-4 sm:mt-2 flex items-center justify-end sm:justify-between`}
          >
            <div className="flex flex-col justify-center">
              <span className="text-[13px] sm:text-[16px] font-semibold tracking-wider">
                Available for full time & Freelance
              </span>
              <span className="text-[13px] sm:text-[16px] font-semibold tracking-wider text-right sm:text-left">
                Work from Feb {"'23"}
              </span>
            </div>
            <div className="hidden sm:block">Scroll Down</div>
          </div>
        </div>
      </div>

      {/* focused Image (center) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              className="h-[15rem] w-[15rem] sm:h-55 sm:w-55 md:h-65 md:w-65 lg:h-75 lg:w-75 xl:h-80 xl:w-80 overflow-hidden rounded-full opacity-75"
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
