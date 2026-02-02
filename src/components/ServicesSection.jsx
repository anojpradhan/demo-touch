// components/ServicesSection.jsx
import React from "react";
import {
  BookOpen,
  Globe,
  FileText,
  Users,
  Award,
  MessageSquare,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Test Preparation",
      description:
        "Comprehensive coaching for IELTS, TOEFL, GRE, GMAT, SAT with mock tests and personalized strategies.",
      features: ["IELTS", "TOEFL", "GRE", "GMAT", "SAT"],
      color: "bg-blue-50 border-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Study Abroad",
      description:
        "End-to-end guidance for university selection, applications, and admission process worldwide.",
      features: ["USA", "UK", "Canada", "Australia", "Europe"],
      color: "bg-green-50 border-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Visa Assistance",
      description:
        "Expert documentation support and interview preparation for high visa success rates.",
      features: [
        "Documentation",
        "Interview Prep",
        "Appeal Support",
        "Fast Track",
      ],
      color: "bg-purple-50 border-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Career Counseling",
      description:
        "Personalized career path assessment and guidance based on your skills and aspirations.",
      features: [
        "Career Assessment",
        "Skill Mapping",
        "Path Planning",
        "Industry Trends",
      ],
      color: "bg-amber-50 border-amber-100",
      iconColor: "text-amber-600",
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Scholarship Guidance",
      description:
        "Access to exclusive scholarships and financial aid opportunities with application support.",
      features: [
        "Merit-based",
        "Need-based",
        "Sports",
        "Research",
        "Government",
      ],
      color: "bg-red-50 border-red-100",
      iconColor: "text-red-600",
    },
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: "Language Training",
      description:
        "Specialized language courses for international study and professional requirements.",
      features: ["English", "German", "French", "Spanish", "Japanese"],
      color: "bg-indigo-50 border-indigo-100",
      iconColor: "text-indigo-600",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-50 text-red-700 font-semibold px-4 py-2 rounded-full mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-red-700">Educational</span>{" "}
            Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From test preparation to visa assistance, we provide end-to-end
            support for your educational journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl border-2 ${service.color} p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div
                className={`inline-flex p-3 rounded-xl ${service.color.replace("50", "100")} mb-6`}
              >
                <span className={service.iconColor}>{service.icon}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1 bg-white rounded-full border"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <a
                href={`/services/${service.title.toLowerCase().replace(" ", "-")}`}
                className="inline-flex items-center text-red-700 font-semibold hover:text-red-800"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-flex items-center bg-red-700 hover:bg-red-800 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            View All Services
            <svg
              className="w-5 h-5 ml-2"
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
