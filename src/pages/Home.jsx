import { useState, useEffect } from "react";
import { fetchCars } from "../utils/api";
import SearchBar from "../components/SearchBar";
import FilterSection from "../components/FilterSection";
import CarCard from "../components/CarCard";
import Pagination from "../components/Pagination";

const Home = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    brand: "",
    minPrice: "",
    maxPrice: "",
    fuelType: "",
    seatingCapacity: "",
    sort: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 10;

  useEffect(() => {
    const getCars = async () => {
      try {
        setLoading(true);
        const params = {
          ...filters,
          q: searchQuery,
        };
        const data = await fetchCars(params);
        setCars(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch cars. Please try again later.");
        setCars([]);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      getCars();
      setCurrentPage(1);
    }, 500);

    return () => clearTimeout(timer);
  }, [filters, searchQuery]);

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(cars.length / carsPerPage);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">
        Find Your Dream Car
      </h1>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FilterSection filters={filters} setFilters={setFilters} />

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error! </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {currentCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Home;
