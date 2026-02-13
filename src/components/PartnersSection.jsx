// components/PartnersSection.jsx
import React from "react";
import { Building, Award, Globe } from "lucide-react";

const PartnersSection = () => {
  const partners = [
    { name: "Harvard University", type: "University", logo: "🎓" },
    { name: "University of Oxford", type: "University", logo: "📚" },
    { name: "Stanford University", type: "University", logo: "🌲" },
    { name: "MIT", type: "University", logo: "🔬" },
    { name: "University of Toronto", type: "University", logo: "🍁" },
    { name: "University of Melbourne", type: "University", logo: "🐨" },
    { name: "IELTS Official", type: "Test Partner", logo: "📝" },
    { name: "TOEFL", type: "Test Partner", logo: "🇺🇸" },
    { name: "British Council", type: "Partner", logo: "🇬🇧" },
    { name: "Education USA", type: "Partner", logo: "🇺🇸" },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-50 text-red-700 font-semibold px-4 py-2 rounded-full mb-4">
            Our Partners
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-red-700">Leading</span>{" "}
            Institutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with top universities worldwide to
            provide the best opportunities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {partner.logo}
              </div>
              <h3 className="font-bold text-gray-900 text-center mb-1">
                {partner.name}
              </h3>
              <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {partner.type}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-linear-to-r from-red-700 to-red-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-gray-200">
                Join thousands of successful students who trusted us with their
                dreams
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="grow px-6 py-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
                <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-lg transition-colors whitespace-nowrap">
                  Get Free Consultation
                </button>
              </div>
              <p className="text-sm text-gray-300 mt-4">
                By submitting, you agree to our Terms and receive updates about
                our services
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
