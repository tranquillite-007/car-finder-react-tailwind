import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCarDetails } from "../utils/api";
import WishlistButton from "../components/WishlistButton";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

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
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-8 bg-[#78B3CE] dark:bg-[#FF6500] rounded-full mb-4"></div>
          <p className="text-[#1E3E62] dark:text-white">
            Loading vehicle details...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 dark:bg-red-900/30 border-l-4 border-red-500 dark:border-red-400 text-red-700 dark:text-red-100 p-4 rounded-lg shadow-md">
          <div className="flex items-center">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <strong className="font-bold">Error! </strong>
            <span className="block sm:inline ml-1">{error}</span>
          </div>
        </div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="bg-white dark:bg-[#0B192C] p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
          <svg
            className="w-16 h-16 mx-auto text-[#78B3CE] dark:text-[#FF6500]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 className="text-2xl font-bold text-[#1E3E62] dark:text-white mt-4">
            Vehicle Not Found
          </h2>
          <p className="text-[#1E3E62]/80 dark:text-gray-300 mt-2">
            The requested vehicle could not be located in our database.
          </p>
        </div>
      </div>
    );
  }

  const carImages = [
    car.image,
    "https://via.placeholder.com/600/333/fff?text=Front+View",
    "https://via.placeholder.com/600/333/fff?text=Interior",
    "https://via.placeholder.com/600/333/fff?text=Dashboard",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1E3E62] to-[#F96E2A] dark:from-[#FF6500] dark:to-[#78B3CE]">
          Vehicle Specifications
        </h1>
        <div className="h-1 w-24 bg-[#F96E2A] dark:bg-[#FF6500] mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="bg-white dark:bg-[#0B192C] rounded-2xl shadow-xl overflow-hidden border border-[#C9E6F0] dark:border-[#1E3E62]">
        <div className="md:flex">
          <div className="md:w-1/2 relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 z-10 pointer-events-none"></div>
            <img
              src={carImages[activeImage]}
              alt={car.name}
              className="w-full h-full object-contain transition-all duration-500"
            />

            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
              {carImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeImage === index
                      ? "bg-[#F96E2A] dark:bg-[#FF6500] w-6"
                      : "bg-white/70"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>

            <div className="absolute top-4 left-4 bg-[#1E3E62] dark:bg-[#FF6500] text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg z-20 flex items-center">
              <span className="h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              {car.fuelType === "Electric" ? "EV" : car.fuelType}
            </div>
          </div>

          <div className="p-8 md:w-1/2">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-[#1E3E62] dark:text-white">
                  {car.name}
                </h1>
                <p className="text-[#78B3CE] dark:text-[#FF6500] font-medium">
                  {car.brand}
                </p>
              </div>
              <WishlistButton car={car} />
            </div>

            <div className="mb-8 p-4 bg-[#FBF8EF] dark:bg-[#1A2E47] rounded-xl border border-[#C9E6F0] dark:border-[#1E3E62]">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-[#78B3CE] dark:text-gray-400">
                  STARTING AT
                </span>
                <span className="text-3xl font-bold text-[#F96E2A] dark:text-[#FF6500]">
                  ${car.price.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Model Year", value: car.year, icon: "calendar" },
                { label: "Fuel Type", value: car.fuelType, icon: "zap" },
                {
                  label: "Seating",
                  value: `${car.seatingCapacity} seats`,
                  icon: "users",
                },
                {
                  label: "Transmission",
                  value: car.transmission || "Automatic",
                  icon: "settings",
                },
                {
                  label: "Mileage",
                  value: car.mileage || "N/A",
                  icon: "gauge",
                },
                { label: "Drivetrain", value: "RWD/AWD", icon: "layers" },
              ].map((spec, index) => (
                <div
                  key={index}
                  className="bg-[#FBF8EF] dark:bg-[#1A2E47] p-3 rounded-lg border border-[#C9E6F0] dark:border-[#1E3E62]"
                >
                  <div className="flex items-center mb-1">
                    <svg
                      className="w-4 h-4 mr-2 text-[#78B3CE] dark:text-[#FF6500]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={getIconPath(spec.icon)}
                      />
                    </svg>
                    <h3 className="text-sm font-medium text-[#78B3CE] dark:text-gray-400">
                      {spec.label}
                    </h3>
                  </div>
                  <p className="text-lg font-semibold text-[#1E3E62] dark:text-white">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-[#1E3E62] dark:text-white flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-[#78B3CE] dark:text-[#FF6500]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Vehicle Overview
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {car.description ||
                  "No description available. Please contact our sales team for more information about this vehicle."}
              </p>
            </div>

            <button className="w-full py-3 bg-gradient-to-r from-[#F96E2A] to-[#FF8C4B] dark:from-[#FF6500] dark:to-[#FF8C4B] text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Contact Dealer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function getIconPath(icon) {
  const icons = {
    calendar:
      "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    zap: "M13 10V3L4 14h7v7l9-11h-7z",
    users:
      "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    settings:
      "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    gauge:
      "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    layers:
      "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  };
  return icons[icon] || "";
}

export default CarDetails;
