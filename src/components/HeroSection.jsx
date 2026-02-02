// components/HeroSection.jsx
import React from "react";
import { ArrowRight, GraduationCap, Globe, Award, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-linear-to-br from-red-900 via-red-900 to-red-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">
                Trusted by 1000+ Students
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Gateway to
              <span className="block text-yellow-200 mt-2">
                Global Education
              </span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              We transform dreams into reality with expert guidance for studying
              abroad, test preparation, and scholarship opportunities worldwide.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="/services"
                className="inline-flex items-center bg-white text-red-800 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform shadow-lg hover:shadow-xl group"
              >
                Explore Services
                <ArrowRight className="group-hover:translate-x-4 transition-all" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Free Consultation
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-200">98%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-200">500+</div>
                <div className="text-sm text-gray-300">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-200">50+</div>
                <div className="text-sm text-gray-300">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-200">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-linear-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                <div className="text-center p-8">
                  <GraduationCap className="w-24 h-24 text-yellow-200 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Start Your Journey Today
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Book your free counseling session
                  </p>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-2xl w-48">
              <div className="flex items-center">
                <Globe className="w-8 h-8 text-red-600 mr-3" />
                <div>
                  <div className="font-bold text-gray-800">Global Reach</div>
                  <div className="text-sm text-gray-600">50+ Countries</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-2xl w-48">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-red-600 mr-3" />
                <div>
                  <div className="font-bold text-gray-800">Expert Team</div>
                  <div className="text-sm text-gray-600">50+ Counselors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
