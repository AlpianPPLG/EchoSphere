import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden mt-12 lg:mt-20">
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E3A8A] leading-tight">
              Delicious & Affordable
              <br />
              <span className="inline-block bg-[#7C3AED] text-white px-4 py-2 transform -skew-x-6">
                Meals Near You.
              </span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <button className="bg-[#7C3AED] text-white px-8 py-3 rounded-md hover:bg-[#6D28D9] transition-colors text-lg font-semibold">
                Order Now
              </button>

              <button className="flex items-center gap-2 text-gray-700 hover:text-[#7C3AED] transition-colors text-lg">
                <span className="w-10 h-10 flex items-center justify-center border-2 border-current rounded-full">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Meet The Chefs
              </button>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/img/image1.jpg"
                alt="Delicious meals including steak and salads on gray plates"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Decorative dots pattern */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#7C3AED]/10">
              <div className="absolute inset-0 grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]/40"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
