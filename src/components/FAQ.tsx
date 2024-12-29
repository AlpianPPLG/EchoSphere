import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How does your meal delivery service work?",
    answer:
      "Our meal delivery service provides fresh, chef-prepared meals delivered straight to your door. You choose your meals from our weekly menu, and we take care of the rest - cooking, packaging, and delivery. Just heat and enjoy!",
  },
  {
    id: 2,
    question: "Can I customize my meal plan?",
    answer:
      "We offer a variety of customization options. You can select your dietary preferences (e.g., vegetarian, low-carb, gluten-free), exclude specific ingredients, and even adjust portion sizes to fit your needs.",
  },
  {
    id: 3,
    question: "How often will I receive deliveries?",
    answer:
      "You can choose the delivery frequency that works best for you. We offer weekly, bi-weekly, or monthly delivery options. You can also pause or skip deliveries at any time through your account settings.",
  },
  {
    id: 4,
    question: "Are your ingredients organic and locally sourced?",
    answer:
      "We prioritize using organic and locally sourced ingredients whenever possible. Our commitment is to provide fresh, high-quality ingredients while supporting local farmers and sustainable practices. The origin of ingredients is clearly labeled on each meal.",
  },
  {
    id: 5,
    question: "How long do the meals stay fresh?",
    answer:
      "Our meals are designed to stay fresh in the refrigerator for up to 5 days from the delivery date. We recommend consuming them within this timeframe for the best taste and quality. Each meal is clearly labeled with a 'best by' date.",
  },
  {
    id: 6,
    question: "What if I'm not home during the delivery time?",
    answer:
      "No worries! Our packaging is designed to keep your meals fresh for several hours. We use insulated boxes and ice packs to ensure your food stays at a safe temperature. You can also provide delivery instructions for a preferred drop-off location.",
  },
];

const FAQItem: React.FC<{
  item: FAQItem;
  isOpen: boolean;
  toggleOpen: () => void;
}> = ({ item, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={toggleOpen}
      >
        <span className="text-lg font-medium text-gray-900">
          {item.question}
        </span>
        <svg
          className={`w-6 h-6 text-[#7C3AED] transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="pb-5 text-gray-600">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(id)
        ? prevOpenItems.filter((item) => item !== id)
        : [...prevOpenItems, id]
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-[#7C3AED] uppercase tracking-wide">
            FAQ
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Can't find the answer you're looking for? Reach out to our customer
            support team.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openItems.includes(item.id)}
              toggleOpen={() => toggleItem(item.id)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <motion.button
            className="inline-flex items-center bg-[#7C3AED] text-white px-8 py-3 rounded-md hover:bg-[#6D28D9] transition-colors text-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
