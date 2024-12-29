import React from "react";
import { motion } from "framer-motion";

interface PricingTier {
  id: number;
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    id: 1,
    name: "Basic",
    price: 9.99,
    features: [
      "3 meals per week",
      "Basic recipe selection",
      "Email support",
      "Cancel anytime",
    ],
  },
  {
    id: 2,
    name: "Pro",
    price: 19.99,
    features: [
      "5 meals per week",
      "Wide recipe selection",
      "Priority email support",
      "Free delivery",
      "Cancel anytime",
    ],
    isPopular: true,
  },
  {
    id: 3,
    name: "Premium",
    price: 29.99,
    features: [
      "7 meals per week",
      "Full recipe library access",
      "24/7 phone support",
      "Free delivery",
      "Exclusive chef consultations",
      "Cancel anytime",
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-[#7C3AED] uppercase tracking-wide">
            Pricing Plans
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Choose the Perfect Plan for You
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Select a plan that fits your needs and start enjoying delicious,
            chef-prepared meals today.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                tier.isPopular ? "ring-2 ring-[#7C3AED]" : ""
              }`}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {tier.isPopular && (
                <div className="bg-[#7C3AED] text-white text-center py-2 px-4 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-500 mb-6">
                  {tier.features.length} meal plan
                </p>
                <p className="text-4xl font-bold text-gray-900 mb-6">
                  ${tier.price}
                  <span className="text-xl text-gray-500 font-normal">
                    /month
                  </span>
                </p>
                <ul className="mb-8 space-y-4">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  className={`w-full py-3 px-4 rounded-md text-lg font-semibold transition-colors ${
                    tier.isPopular
                      ? "bg-[#7C3AED] text-white hover:bg-[#6D28D9]"
                      : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Choose Plan
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <motion.button
            className="mt-4 inline-flex items-center text-[#7C3AED] font-semibold hover:text-[#6D28D9]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Compare all features
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
