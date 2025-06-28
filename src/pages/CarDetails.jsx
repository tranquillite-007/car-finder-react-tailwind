import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCarDetails } from "../utils/api";
import WishlistButton from "../components/WishlistButton";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCarDetails = async () => {
      try {
        setLoading(true);
        const data = await fetchCarDetails(id);
        setCar(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch car details. Please try again later.");
        setCar(null);
      } finally {
        setLoading(false);
      }
    };

    getCarDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Error! </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="text-center py-8 dark:text-white">Car not found</div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={car.image || "https://via.placeholder.com/600"}
              alt={car.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 md:w-1/2">
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold mb-2 dark:text-white">
                {car.name}
              </h1>
              <WishlistButton car={car} />
            </div>

            <div className="mb-6">
              <span className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
                ${car.price.toLocaleString()}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Brand
                </h3>
                <p className="text-lg dark:text-white">{car.brand}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Model Year
                </h3>
                <p className="text-lg dark:text-white">{car.year}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Fuel Type
                </h3>
                <p className="text-lg dark:text-white">{car.fuelType}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Seating Capacity
                </h3>
                <p className="text-lg dark:text-white">{car.seatingCapacity}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Transmission
                </h3>
                <p className="text-lg dark:text-white">
                  {car.transmission || "Automatic"}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Mileage
                </h3>
                <p className="text-lg dark:text-white">
                  {car.mileage || "N/A"}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 dark:text-white">
                Description
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {car.description || "No description available."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
