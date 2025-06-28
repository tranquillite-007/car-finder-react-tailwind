import { Link } from "react-router-dom";
import WishlistButton from "./WishlistButton";

const CarCard = ({ car }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link to={`/car/${car.id}`}>
        <div className="h-48 bg-gray-200 overflow-hidden">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover"
          />
        </div>
      </Link>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <Link to={`/car/${car.id}`}>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              {car.name}
            </h3>
          </Link>
          <WishlistButton car={car} />
        </div>

        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">Brand:</span> {car.brand}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">Fuel:</span> {car.fuelType}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">Seats:</span> {car.seatingCapacity}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">Price:</span> $
            {car.price.toLocaleString()}
          </div>
        </div>

        <Link
          to={`/car/${car.id}`}
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
