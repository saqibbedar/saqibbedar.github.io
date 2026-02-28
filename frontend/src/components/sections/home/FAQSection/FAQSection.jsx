import { useState } from "react";
import { faqs } from "@/assets/assets";
import { motion, AnimatePresence } from "motion/react";
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
      {/* Question Header */}
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
              : "bg-bg-card border border-border text-fg-secondary group-hover:border-border-light"
          }`}
        >
          {isOpen ? (
            <FaMinus className="w-3 h-3 sm:w-4 sm:h-4" />
          ) : (
            <FaPlus className="w-3 h-3 sm:w-4 sm:h-4" />
          )}
        </div>
      </button>

      {/* Answer Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-10 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* Section Header */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-fg-secondary text-sm sm:text-base font-semibold uppercase tracking-widest mb-2">
          Questions
        </h2>
        <p className="text-fg-primary text-xl sm:text-2xl md:text-3xl font-semibold">
          Frequently Asked Questions
        </p>
      </div>

      {/* FAQ List */}
      <div className="flex flex-col gap-3 sm:gap-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={faq._id}
            question={faq.question}
            answer={faq.ans}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
