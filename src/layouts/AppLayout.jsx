// AppLayout.jsx - Main Layout Component

import Header from "../components/Header";

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="grow">{children}</main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <span className="text-3xl font-bold text-white">TOUCH</span>
                <div className="ml-2">
                  <span className="text-sm font-semibold text-gray-300 tracking-wider block">
                    CONSULTANCY
                  </span>
                  <div className="h-0.5 w-full bg-maroon-500 mt-0.5"></div>
                </div>
              </div>
              <p className="mt-4 text-gray-400 max-w-md">
                Your trusted partner in education consultancy. We help students
                achieve their dreams of studying abroad.
              </p>
            </div>

            <div className="text-center md:text-right">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a
                  href="/contact"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="/scholarships"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Scholarships
                </a>
                <a
                  href="/about-us"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Touch Consultancy. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
