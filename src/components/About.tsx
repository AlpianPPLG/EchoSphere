import React from "react";

const About: React.FC = () => {
  const features = [
    {
      title: "Fresh Ingredients",
      description:
        "We source only the freshest ingredients from local farmers and suppliers to ensure quality in every dish.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    },
    {
      title: "Expert Chefs",
      description:
        "Our team of experienced chefs brings years of culinary expertise to create exceptional dining experiences.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      title: "Fast Delivery",
      description:
        "Quick and reliable delivery service ensures your food arrives hot and fresh at your doorstep.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-[#7C3AED] uppercase tracking-wide">
            Why Choose Us
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Delivering Excellence in Every Meal
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We combine culinary expertise with premium ingredients to create
            memorable dining experiences.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-16">
          {[
            ["5000+", "Happy Customers"],
            ["150+", "Expert Chefs"],
            ["1000+", "Dishes"],
            ["4.9", "Customer Rating"],
          ].map(([stat, label]) => (
            <div
              key={label}
              className="bg-white p-6 rounded-lg shadow-sm text-center transform hover:scale-105 transition-transform duration-300"
            >
              <p className="text-3xl font-bold text-[#7C3AED]">{stat}</p>
              <p className="text-gray-600 mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="relative">
                <div className="h-12 w-12 bg-[#7C3AED]/10 rounded-lg flex items-center justify-center text-[#7C3AED] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center bg-[#7C3AED] text-white px-8 py-3 rounded-md hover:bg-[#6D28D9] transition-colors text-lg font-semibold">
            Learn More About Us
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
