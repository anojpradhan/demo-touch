// components/StatsSection.jsx
import React from "react";
import { Users, Globe, Award, Building, BookOpen, Heart } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "1000+",
      label: "Happy Students",
      color: "bg-red-100 text-red-700",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: "50+",
      label: "Countries",
      color: "bg-red-100 text-red-700",
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "$10M+",
      label: "Scholarships Won",
      color: "bg-orange-100 text-orange-700",
    },
    {
      icon: <Building className="w-8 h-8" />,
      value: "500+",
      label: "Partner Universities",
      color: "bg-amber-100 text-amber-700",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      value: "98%",
      label: "Success Rate",
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      value: "99%",
      label: "Client Satisfaction",
      color: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <div className="py-16 bg-linear-to-r from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-700">Achievements</span> Speak
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Years of excellence and thousands of success stories that make us
            the trusted choice
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className={`inline-flex p-3 rounded-lg mb-4 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
