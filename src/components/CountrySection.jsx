const countries = [
  {
    id: 1,
    title: "Australia",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03",
  },
  {
    id: 2,
    title: "Canada",
    image: "https://images.unsplash.com/photo-1507992781348-310259076fe0",
  },
  {
    id: 3,
    title: "United Kingdom",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  },
  {
    id: 4,
    title: "United States",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
  },
];

const CountrySection = () => {
  return (
    <div className="flex flex-wrap gap-8">
      {countries.map((country) => (
        <div
          key={country.id}
          className="group relative w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] 
                     rounded-2xl overflow-hidden
                     shadow-[0_10px_30px_rgba(0,0,0,0.5)]
                     transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
                     hover:-translate-y-5 hover:scale-[1.03]
                     hover:shadow-[0_30px_60px_rgba(220,38,38,0.45)]"
        >
          {/* Image */}
          <div className="relative h-55 overflow-hidden">
            <img
              src={country.image}
              alt={`Study in ${country.title}`}
              className="w-full h-[120%] object-cover
                         transition-transform duration-700
                         group-hover:scale-110"
            />

            {/* Overlay */}
            <div
              className="absolute inset-x-0 bottom-0
                         bg-linear-to-t from-red-900/95 to-transparent
                         text-white px-6 pt-10 pb-6
                         translate-y-8 opacity-0
                         transition-all duration-500
                         group-hover:translate-y-0 group-hover:opacity-100"
            >
              <h3 className="text-xl font-semibold mb-2">
                Study in {country.title}
              </h3>
              <a
                href="#"
                className="text-red-200 font-medium hover:text-white transition-colors"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountrySection;
