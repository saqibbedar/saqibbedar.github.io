import { SlideText } from "@/components/ui";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const STYLES = {
  responsive: {
    maxPx: "px-8", // maxPaddingInline
    minPx: "px-4", // minPaddingInline
    maxMx: "mx-8",
    minMx: "mx-4"
  },
};

const VIDEOURLS = {
  educator: "/videos/intro.mp4",
  innovation: "/videos/innovation.mp4",
  developer: "/videos/coding.mp4"
}

const CoverSection = () => {

  const [playVideo, setPlayVideo] = useState("");

  function chooseVideoToPlay(url) {
    switch (url) {
      case "educator":
        return VIDEOURLS.educator;
      case "innovation":
        return VIDEOURLS.innovation;
      case "developer":
        return VIDEOURLS.developer;
      default:
        return "";
    }
  }

  return (
    <div className="relative min-h-[100dvh] h-[100dvh] overflow-hidden">
      {/* Background Video */}
      <div className="opacity-20 absolute inset-0 w-full h-full z-0">
        <AnimatePresence mode="wait">
          {playVideo && (
            <motion.video
              key={playVideo}
              src={chooseVideoToPlay(playVideo)}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center filter grayscale"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.video>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="h-full flex place-items-center z-10">
        <div className="h-[80dvh] w-full">
          <div
            className={`${STYLES.responsive.maxPx} relative h-full w-full flex overflow-hidden`}
          >
            {/* first head */}
            <div className="w-1/2 flex flex-col justify-start gap-1">
              <div className="flex justify-end">
                <SlideText>
                  <motion.div
                    onHoverStart={() => setPlayVideo("developer")}
                    onHoverEnd={() => setPlayVideo("")}
                    className="text-[7vw] text-nowrap font-semibold text-[var(--dt-sec-fg)] leading-[8.99rem] cursor-pointer"
                  >
                    Developer
                  </motion.div>
                </SlideText>
              </div>
              <div className="flex justify-start">
                <SlideText>
                  <motion.div
                    onHoverStart={() => setPlayVideo("educator")}
                    onHoverEnd={() => setPlayVideo("")}
                    className="text-[7vw] text-nowrap font-semibold text-[var(--dt-sec-fg)] leading-[8.99rem] cursor-pointer"
                  >
                    Educator
                  </motion.div>
                </SlideText>
              </div>
            </div>
            {/* second head */}
            <div className="w-1/2 flex flex-col justify-end gap-1">
              <div className="flex justify-end">
                <SlideText>
                  <motion.div
                    onHoverStart={() => setPlayVideo("innovation")}
                    onHoverEnd={() => setPlayVideo("")}
                    className="text-[7vw] text-nowrap font-semibold text-[var(--dt-sec-fg)] leading-[8.99rem] cursor-pointer"
                  >
                    Innovation
                  </motion.div>
                </SlideText>
              </div>
              <div className="flex justify-start">
                <SlideText>
                  <motion.div
                    onHoverStart={() => setPlayVideo("innovation")}
                    onHoverEnd={() => setPlayVideo("")}
                    className="text-[7vw] text-nowrap font-semibold text-[var(--dt-sec-fg)] leading-[8.99rem] cursor-pointer"
                  >
                    Architect
                  </motion.div>
                </SlideText>
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
        <AnimatePresence mode="wait">
          {!playVideo && (
            <motion.div
              className="h-96 w-96 overflow-hidden rounded-full opacity-75"
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 0.75,
                y: 0,
                scale: 1,
                type: "spring",
                visualDuration: 0.9,
                bounce: 0.25,
              }}
              exit={{ opacity: 0, scale: 0 }}
              // transition={{
              //   duration: 0.5,
              //   ease: "easeInOut",
              // }}
            >
              <img
                src="/images/profile2.png"
                className="w-inherit h-inherit object-cover object-center filter grayscale rounded-full"
                alt="Saqib Bedar during orientation of juniors"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CoverSection;
