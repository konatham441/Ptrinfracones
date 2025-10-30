import React from "react";

const videoData = [
  {
    id: 1,
    title: "Unlock the Door of Your Dream Home",
    videoUrl: "https://www.youtube.com/embed/onz3Vrk9W6g", // ✅ embed version
    customer: "Srinu & Priya",
    crn: "CRN: 67890",
    description:
      "A modern home that blended timeless elegance with everyday functionality. With PTR InfraCon’s expert team, their dream took shape as a stunning reality — a home that perfectly balances contemporary design and lasting comfort.",
  },
  {
    id: 2,
    title: "Opulent 1200 sq ft Modern Retreat",
    videoUrl: "https://www.youtube.com/embed/59E451l4kGQ", // ✅ embed version
    customer: "Prakash & Anjali",
    crn: "CRN: 23456",
    description:
      "PTR InfraCon helped Prakash and Anjali bring to life a home that’s both elegant and practical — a peaceful retreat designed for modern living, comfort, and everyday convenience.",
  },
  {
    id: 3,
    title: "Elegant Duplex in South Bangalore",
    videoUrl: "https://www.youtube.com/embed/onz3Vrk9W6g", // ✅ another embed example
    customer: "Reddy & Lakshmi",
    crn: "CRN: 12345",
    description:
      "From concept to completion, PTR InfraCon turned Arjun and Sneha’s vision into reality — a beautifully crafted home where innovative design meets flawless execution.",
  },
];

export default function WalkthroughVideos() {
  return (
    <section className="py-16 text-gray-800 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Walkthroughs – Video Tour
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Over <span className="font-semibold">10,000+</span> happy family
          members are part of the PTRInfraCon family.
        </p>

        {/* Video Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {videoData.map((video) => (
            <div
              key={video.id}
              className="rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white transition-transform hover:scale-[1.02]"
            >
              {/* Video Embed */}
              <div className="aspect-video">
                <iframe
                  src={video.videoUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Customer Info */}
              <div className="px-4 py-2 text-sm text-gray-600 bg-black text-white">
                Customer: {video.customer} | {video.crn}
              </div>

              {/* Description */}
              <div className="p-4">
                <p className="text-orange-500 text-4xl leading-none mb-2">“</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
