import { Link } from "react-router-dom";
import WishlistButton from "./WishlistButton";

const CarCard = ({ car }) => {
  return (
    <div className="group relative bg-[#FBF8EF] dark:bg-[#0B192C] rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link to={`/car/${car.id}`} className="block overflow-hidden">
        <div className="relative h-60 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute bottom-4 right-4 bg-gradient-to-r from-[#F96E2A] to-[#FF8C4B] text-white px-3 py-1 rounded-full text-sm font-bold shadow-md z-20">
            ${car.price.toLocaleString()}
          </div>
        </div>
      </Link>

      <div className="p-5 relative">
        <div className="flex justify-between items-start mb-3">
          <Link to={`/car/${car.id}`} className="hover:no-underline">
            <h3 className="text-xl font-bold text-[#1E3E62] dark:text-white transition-colors duration-300 group-hover:text-[#F96E2A] dark:group-hover:text-[#FF6500]">
              {car.name}
            </h3>
            <p className="text-sm text-[#78B3CE] dark:text-gray-400">
              {car.brand}
            </p>
          </Link>
          <WishlistButton car={car} />
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4 mb-6">
          <div className="flex items-center">
            <div className="w-1 h-6 bg-[#78B3CE] dark:bg-[#FF6500] mr-2 transition-all duration-500 group-hover:h-8 rounded-full"></div>
            <div className="text-sm text-[#1E3E62] dark:text-gray-300">
              <span className="font-medium">Fuel:</span> {car.fuelType}
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1 h-4 bg-[#78B3CE] dark:bg-[#FF6500] mr-2 transition-all duration-500 group-hover:h-6 delay-75 rounded-full"></div>
            <div className="text-sm text-[#1E3E62] dark:text-gray-300">
              <span className="font-medium">Seats:</span> {car.seatingCapacity}
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1 h-5 bg-[#78B3CE] dark:bg-[#FF6500] mr-2 transition-all duration-500 group-hover:h-7 delay-100 rounded-full"></div>
            <div className="text-sm text-[#1E3E62] dark:text-gray-300">
              <span className="font-medium">Mileage:</span> {car.mileage}
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1 h-3 bg-[#78B3CE] dark:bg-[#FF6500] mr-2 transition-all duration-500 group-hover:h-5 delay-150 rounded-full"></div>
            <div className="text-sm text-[#1E3E62] dark:text-gray-300">
              <span className="font-medium">Trans:</span> {car.transmission}
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <Link
            to={`/car/${car.id}`}
            className="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium text-white bg-[#1E3E62] dark:bg-[#FF6500] rounded-lg transition-all duration-300 hover:bg-[#F96E2A] dark:hover:bg-[#1E3E62]"
          >
            <span className="flex items-center">
              View Details
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-8 bg-[#78B3CE] dark:bg-[#FF6500] transform rotate-45 translate-y-4 translate-x-8 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default CarCard;
