import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Food Enthusiast",
    content:
      "I've tried many meal delivery services, but this one stands out. The quality of ingredients and the variety of dishes are unmatched. It's like having a personal chef!",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Busy Professional",
    content:
      "As someone with a hectic schedule, this service has been a lifesaver. Delicious, healthy meals without the hassle of grocery shopping or cooking. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Sarah Thompson",
    role: "Fitness Trainer",
    content:
      "I'm impressed by the nutritional balance of these meals. They're perfect for my clients who want to eat healthy without sacrificing taste. The portion sizes are spot on too!",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const TestimonialSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-[#7C3AED] uppercase tracking-wide">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Customers Say
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Don't just take our word for it - hear from some of our satisfied
            customers!
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <img
                src={testimonials[currentTestimonial].avatar}
                alt={testimonials[currentTestimonial].name}
                className="w-24 h-24 rounded-full mx-auto mb-6"
              />
              <blockquote className="text-xl font-medium text-gray-900 mb-4">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <p className="text-lg font-semibold text-gray-900">
                {testimonials[currentTestimonial].name}
              </p>
              <p className="text-base text-gray-600">
                {testimonials[currentTestimonial].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0">
            <button
              onClick={prevTestimonial}
              className="absolute left-0 bg-white rounded-full p-2 text-gray-800 hover:text-[#7C3AED] focus:outline-none focus:ring-2 focus:ring-[#7C3AED] transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 bg-white rounded-full p-2 text-gray-800 hover:text-[#7C3AED] focus:outline-none focus:ring-2 focus:ring-[#7C3AED] transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full mx-1 focus:outline-none ${
                index === currentTestimonial ? "bg-[#7C3AED]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
