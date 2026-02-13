import { ArrowRight } from "lucide-react";

const Cta = () => {
  return (
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
  );
};

export default Cta;
