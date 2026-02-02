import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Star,
  DollarSign,
} from "lucide-react";

const DestinationsSection = () => {
  const destinations = [
    {
      country: "United States",
      flag: "🇺🇸",
      universities: "200+",
      popular: "MIT, Harvard, Stanford",
      cost: "$$$$",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800",
    },
    {
      country: "United Kingdom",
      flag: "🇬🇧",
      universities: "150+",
      popular: "Oxford, Cambridge, Imperial",
      cost: "$$$",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800",
    },
    {
      country: "Canada",
      flag: "🇨🇦",
      universities: "100+",
      popular: "Toronto, UBC, McGill",
      cost: "$$$",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800",
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      universities: "80+",
      popular: "Melbourne, Sydney, ANU",
      cost: "$$$",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800",
    },
    {
      country: "Germany",
      flag: "🇩🇪",
      universities: "120+",
      popular: "TU Munich, Heidelberg, Berlin",
      cost: "$$",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=800",
    },
    {
      country: "Japan",
      flag: "🇯🇵",
      universities: "60+",
      popular: "Tokyo, Kyoto, Osaka",
      cost: "$$$",
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800",
    },
  ];

  // clone slides for infinite loop
  const slides = [
    destinations[destinations.length - 1],
    ...destinations,
    destinations[0],
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const nextSlide = () => setCurrentIndex((prev) => prev + 1);
  const prevSlide = () => setCurrentIndex((prev) => prev - 1);

  // autoplay
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // handle seamless looping
  useEffect(() => {
    if (currentIndex === slides.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 500);
    }

    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(slides.length - 2);
      }, 500);
    }
  }, [currentIndex, slides.length]);

  // re-enable animation after jump
  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => setIsTransitioning(true));
    }
  }, [isTransitioning]);

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-50 text-red-700 font-semibold px-4 py-2 rounded-full mb-4">
            Top Destinations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Study in <span className="text-red-700">Popular</span> Countries
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore top education destinations with our expert guidance and
            university partnerships
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className={`flex will-change-transform ${
                isTransitioning
                  ? "transition-transform duration-500 ease-in-out"
                  : ""
              }`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((destination, index) => (
                <div key={index} className="w-full shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-xl p-8">
                    {/* Left */}
                    <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">{destination.flag}</div>
                        <h3 className="text-3xl font-bold text-white mb-2">
                          {destination.country}
                        </h3>
                        <div className="flex justify-center items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(destination.rating)
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-400"
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-white">
                            {destination.rating}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right */}
                    <div>
                      <h3 className="text-2xl font-bold mb-4">
                        Why Study in {destination.country}?
                      </h3>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-center">
                          <MapPin className="w-5 h-5 text-red-600 mr-3" />
                          <span>
                            {destination.universities} Partner Universities
                          </span>
                        </div>

                        <div className="flex items-center">
                          <Star className="w-5 h-5 text-red-600 mr-3" />
                          <span>{destination.popular}</span>
                        </div>

                        <div className="flex items-center">
                          <DollarSign className="w-5 h-5 text-red-600 mr-3" />
                          <span>{destination.cost} / year</span>
                        </div>
                      </div>

                      <a
                        href={`/study-abroad/${destination.country
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition"
                      >
                        Explore {destination.country}
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
          >
            <ChevronRight />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index + 1)}
                className={`h-3 rounded-full transition-all ${
                  currentIndex === index + 1
                    ? "bg-red-600 w-8"
                    : "bg-gray-300 w-3"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationsSection;
