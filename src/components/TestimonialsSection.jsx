// components/TestimonialsSection.jsx
import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      university: "University of Toronto, Canada",
      course: "Masters in Computer Science",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=200",
      quote:
        "Touch Consultancy made my Canadian dream come true. Their guidance from application to visa was flawless!",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      university: "Stanford University, USA",
      course: "MBA",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200",
      quote:
        "The scholarship guidance helped me secure $50,000 funding. Couldn't have done it without their expertise.",
      rating: 5,
    },
    {
      name: "Anjali Patel",
      university: "University of Oxford, UK",
      course: "PhD in Biotechnology",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200",
      quote:
        "Exceptional support throughout the research proposal and application process. Highly recommended!",
      rating: 5,
    },
    {
      name: "Arjun Reddy",
      university: "University of Melbourne, Australia",
      course: "Bachelors in Engineering",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200",
      quote:
        "From IELTS preparation to visa approval, every step was perfectly handled. Thank you Touch Consultancy!",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-50 text-red-700 font-semibold px-4 py-2 rounded-full mb-4">
            Student Voices
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success <span className="text-red-700">Stories</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our students who have successfully achieved their study
            abroad dreams
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 transform hover:-translate-y-2 ${
                  index === activeIndex
                    ? "border-red-500"
                    : "border-transparent"
                }`}
              >
                <Quote className="w-12 h-12 text-red-100 mb-6" />

                <p className="text-lg text-gray-700 mb-8 italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-linear-to-r from-red-600 to-red-600 flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      testimonial.name.charAt(0)
                    )}
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-red-600 font-medium">
                      {testimonial.university}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {testimonial.course}
                    </p>

                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex ? "bg-red-600 w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
