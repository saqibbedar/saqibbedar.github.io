import { useState } from "react";
import PropTypes from "prop-types";
import { motion as Motion, AnimatePresence } from "motion/react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <div
      className={`group bg-bg-card rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-border-light"
          : "border-border hover:border-border-light"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <span className="text-fg-muted text-sm font-medium">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-base sm:text-lg font-semibold text-fg-primary">
            {question}
          </h3>
        </div>
        <div
          className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-fg-primary text-bg-primary rotate-0"
              : "bg-bg-primary border border-border text-fg-secondary group-hover:border-border-light"
          }`}
        >
          {isOpen ? (
            <FaMinus className="w-3 h-3 sm:w-4 sm:h-4" />
          ) : (
            <FaPlus className="w-3 h-3 sm:w-4 sm:h-4" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <Motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
              <div className="pl-9 sm:pl-12 border-l-2 border-border-light">
                <p className="text-sm sm:text-base text-fg-secondary leading-relaxed">
                  {answer}
                </p>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

const Faqs = ({
  items,
  sectionClassName = "py-10 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16",
  listClassName = "flex flex-col gap-3 sm:gap-4",
  showHeader = true,
  eyebrow = "Questions",
  title = "Frequently Asked Questions",
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const normalizedItems = items.map((item, index) => ({
    key: item?._id ?? index,
    question: item?.question ?? item?.title ?? "Untitled question",
    answer: item?.ans ?? item?.answer ?? "",
  }));

  return (
    <section className={sectionClassName}>
      {showHeader && (
        <div className="mb-8 md:mb-12">
          <h2 className="text-fg-secondary text-sm sm:text-base font-semibold uppercase tracking-widest mb-2">
            {eyebrow}
          </h2>
          <p className="text-fg-primary text-xl sm:text-2xl md:text-3xl font-semibold">
            {title}
          </p>
        </div>
      )}

      <div className={listClassName}>
        {normalizedItems.map((item, index) => (
          <FAQItem
            key={item.key}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

Faqs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  sectionClassName: PropTypes.string,
  listClassName: PropTypes.string,
  showHeader: PropTypes.bool,
  eyebrow: PropTypes.string,
  title: PropTypes.string,
};

export default Faqs;
