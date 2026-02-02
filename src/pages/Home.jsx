// pages/Home.jsx

import {
  Calendar,
  MessageSquare,
  FileText,
  Users,
  ArrowRight,
} from "lucide-react";
import ServicesSection from "../components/ServicesSection";
import DestinationsSection from "../components/DestinationsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import PartnersSection from "../components/PartnersSection";
import AppLayout from "../layouts/AppLayout";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";

const Home = () => {
  const quickActions = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Book Consultation",
      description: "Schedule a free one-on-one session with our experts",
      link: "/consultation",
      color: "bg-blue-100 text-blue-700",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Download Brochure",
      description: "Get our complete service catalog and university list",
      link: "/brochure",
      color: "bg-green-100 text-green-700",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Live Chat Support",
      description: "Instant answers to your queries",
      link: "/chat",
      color: "bg-purple-100 text-purple-700",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Join Community",
      description: "Connect with fellow aspirants and alumni",
      link: "/community",
      color: "bg-amber-100 text-amber-700",
    },
  ];

  return (
    <AppLayout>
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Quick Actions */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <a
                key={index}
                href={action.link}
                className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-red-500 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`inline-flex p-3 rounded-lg mb-4 ${action.color}`}
                >
                  {action.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-red-700">
                  {action.title}
                </h3>
                <p className="text-sm text-gray-600">{action.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <ServicesSection />

      {/* Destinations Section */}
      <DestinationsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* CTA Section */}
      <div className="bg-linear-to-b from-white to-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Take the <span className="text-red-700">First Step</span> Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Your dream university is waiting. Let us help you get there.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-red-700 hover:bg-red-800 text-white font-bold px-10 py-5 rounded-lg text-lg transition-all duration-300 transform shadow-xl hover:shadow-2xl group"
            >
              Start Free Consultation
              <ArrowRight className="group-hover:translate-x-4 transition-all" />
            </a>

            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center border-2 border-red-700 text-red-700 hover:bg-red-50 font-bold px-10 py-5 rounded-lg text-lg transition-colors"
            >
              Call Us Now
            </a>
          </div>

          <p className="text-gray-500 mt-8">We respond within 24 hours</p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Home;
