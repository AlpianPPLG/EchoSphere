import React from "react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Healthy Recipes for Busy Professionals",
    excerpt:
      "Discover quick and nutritious meals that fit into your hectic schedule without compromising on taste or health.",
    author: "Emma Watson",
    date: "May 15, 2023",
    category: "Healthy Eating",
    imageUrl: "/img/image2.jpg",
  },
  {
    id: 2,
    title: "The Rise of Plant-Based Cuisine",
    excerpt:
      "Explore the growing trend of plant-based diets and how restaurants are adapting to meet the demand.",
    author: "Michael Green",
    date: "June 2, 2023",
    category: "Food Trends",
    imageUrl: "/img/image3.jpg",
  },
  {
    id: 3,
    title: "Farm to Table: Supporting Local Agriculture",
    excerpt:
      "Learn about the benefits of sourcing ingredients locally and how it impacts both flavor and community.",
    author: "Sarah Johnson",
    date: "June 20, 2023",
    category: "Sustainability",
    imageUrl: "/img/image4.jpg",
  },
  {
    id: 4,
    title: "The Art of Food Photography",
    excerpt:
      "Discover the secrets to capturing mouthwatering images of your culinary creations.",
    author: "John Doe",
    date: "July 1, 2023",
    category: "Food Styling",
    imageUrl: "/img/image5.jpg",
  },
  {
    id: 5,
    title: "A Guide to Cooking with Spices",
    excerpt:
      "Explore the world of spices and learn how to incorporate them into your cooking.",
    author: "Jane Doe",
    date: "July 15, 2023",
    category: "Cooking Techniques",
    imageUrl: "/img/image6.jpg",
  },
  {
    id: 6,
    title: "The Best Cooking Apps for Home Cooks",
    excerpt:
      "Discover the top cooking apps that will take your cooking skills to the next level.",
    author: "Bob Smith",
    date: "July 25, 2023",
    category: "Cooking Tools",
    imageUrl: "/img/image7.jpg",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-[#7C3AED] uppercase tracking-wide">
            Our Blog
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Latest Culinary Insights
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Explore our collection of articles on food trends, recipes, and
            culinary adventures.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48 w-full">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#7C3AED] text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={`https://ui-avatars.com/api/?name=${post.author}&background=7C3AED&color=fff`}
                      alt={post.author}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {post.author}
                      </p>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  <button className="text-[#7C3AED] hover:text-[#6D28D9] font-medium transition-colors duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center bg-[#7C3AED] text-white px-8 py-3 rounded-md hover:bg-[#6D28D9] transition-colors text-lg font-semibold">
            View All Posts
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

export default BlogSection;
