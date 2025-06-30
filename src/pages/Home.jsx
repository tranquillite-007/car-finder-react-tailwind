import { useState, useEffect } from "react";
import { fetchCars } from "../utils/api";
import SearchBar from "../components/SearchBar";
import FilterSection from "../components/FilterSection";
import CarCard from "../components/CarCard";
import Pagination from "../components/Pagination";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

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
    <div className="flex flex-col min-h-screen bg-[#FBF8EF] dark:bg-[#0A1625]">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          {!searchQuery && <Hero />}

          <div className="flex flex-col lg:flex-row gap-8 mt-8">
            {!searchQuery && (
              <div className="lg:w-1/4">
                <FilterSection filters={filters} setFilters={setFilters} />
              </div>
            )}

            <div className={searchQuery ? "lg:w-full" : "lg:w-3/4"}>
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F96E2A] dark:border-[#FF6500]"></div>
                </div>
              ) : error ? (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl"
                  role="alert"
                >
                  <strong className="font-bold">Error! </strong>
                  <span className="block sm:inline">{error}</span>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-[#1E3E62] dark:text-white mb-6">
                    {searchQuery
                      ? `Search Results for "${searchQuery}" (${cars.length} ${
                          cars.length === 1 ? "match" : "matches"
                        })`
                      : `${cars.length} ${
                          cars.length === 1 ? "Car" : "Cars"
                        } Available`}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentCars.map((car) => (
                      <CarCard key={car.id} car={car} />
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <div className="mt-8">
                      <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
