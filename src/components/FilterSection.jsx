import {
  FUEL_TYPES,
  SEATING_CAPACITIES,
  SORT_OPTIONS,
} from "../utils/constants";

const FilterSection = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const dropdownArrow =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3OEIzQ0UiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWRvd24iPjxwYXRoIGQ9Im02IDkgNiA2IDYtNiIvPjwvc3ZnPg==";

  return (
    <div className="bg-[#FBF8EF] dark:bg-[#0B192C] p-6 rounded-2xl shadow-sm border border-[#C9E6F0]/50 dark:border-[#1E3E62]/50">
      <h3 className="text-xl font-semibold text-[#1E3E62] dark:text-white mb-6 pb-2 border-b border-[#C9E6F0] dark:border-[#1E3E62]">
        Filter Cars
      </h3>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-[#1E3E62] dark:text-gray-300 mb-2">
            Brand
          </label>
          <input
            type="text"
            name="brand"
            placeholder="Search brand..."
            className="w-full px-4 py-2.5 bg-white dark:bg-[#1A2E47] border border-[#78B3CE]/50 dark:border-[#2A4365] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#78B3CE] dark:focus:ring-[#4F83B8] text-[#1E3E62] dark:text-gray-200 placeholder-[#78B3CE]/60 dark:placeholder-gray-400 transition-all duration-150"
            value={filters.brand}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#1E3E62] dark:text-gray-300 mb-2">
            Price Range ($)
          </label>
          <div className="flex space-x-3">
            <input
              type="number"
              name="minPrice"
              placeholder="Min"
              className="w-full px-4 py-2.5 bg-white dark:bg-[#1A2E47] border border-[#78B3CE]/50 dark:border-[#2A4365] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#78B3CE] dark:focus:ring-[#4F83B8] text-[#1E3E62] dark:text-gray-200 placeholder-[#78B3CE]/60 dark:placeholder-gray-400 transition-all duration-150"
              value={filters.minPrice}
              onChange={handleChange}
            />
            <input
              type="number"
              name="maxPrice"
              placeholder="Max"
              className="w-full px-4 py-2.5 bg-white dark:bg-[#1A2E47] border border-[#78B3CE]/50 dark:border-[#2A4365] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#78B3CE] dark:focus:ring-[#4F83B8] text-[#1E3E62] dark:text-gray-200 placeholder-[#78B3CE]/60 dark:placeholder-gray-400 transition-all duration-150"
              value={filters.maxPrice}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#1E3E62] dark:text-gray-300 mb-2">
            Fuel Type
          </label>
          <select
            name="fuelType"
            className="w-full px-4 py-2.5 bg-white dark:bg-[#1A2E47] border border-[#78B3CE]/50 dark:border-[#2A4365] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#78B3CE] dark:focus:ring-[#4F83B8] text-[#1E3E62] dark:text-gray-200 cursor-pointer appearance-none bg-no-repeat bg-[center_right_1rem]"
            style={{ backgroundImage: `url("${dropdownArrow}")` }}
            value={filters.fuelType}
            onChange={handleChange}
          >
            <option value="">All Fuel Types</option>
            {FUEL_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#1E3E62] dark:text-gray-300 mb-2">
            Seating Capacity
          </label>
          <div className="flex flex-wrap gap-2">
            {SEATING_CAPACITIES.map((capacity) => (
              <button
                key={capacity.value}
                type="button"
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    seatingCapacity:
                      prev.seatingCapacity === capacity.value
                        ? ""
                        : capacity.value,
                  }))
                }
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  filters.seatingCapacity === capacity.value
                    ? "bg-[#F96E2A] text-white shadow-sm"
                    : "bg-white dark:bg-[#1A2E47] text-[#1E3E62] dark:text-gray-300 border border-[#C9E6F0] dark:border-[#1E3E62]/50 hover:bg-[#F96E2A]/10 dark:hover:bg-[#FF6500]/10"
                }`}
              >
                {capacity.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#1E3E62] dark:text-gray-300 mb-2">
            Sort By
          </label>
          <select
            name="sort"
            className="w-full px-4 py-2.5 bg-white dark:bg-[#1A2E47] border border-[#78B3CE]/50 dark:border-[#2A4365] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#78B3CE] dark:focus:ring-[#4F83B8] text-[#1E3E62] dark:text-gray-200 cursor-pointer appearance-none bg-no-repeat bg-[center_right_1rem]"
            style={{ backgroundImage: `url("${dropdownArrow}")` }}
            value={filters.sort}
            onChange={handleChange}
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="button"
        onClick={() =>
          setFilters({
            brand: "",
            minPrice: "",
            maxPrice: "",
            fuelType: "",
            seatingCapacity: "",
            sort: SORT_OPTIONS[0].value,
          })
        }
        className="mt-8 w-full py-2.5 bg-[#1E3E62] dark:bg-[#2A4365] text-white rounded-lg hover:bg-[#1E3E62]/90 dark:hover:bg-[#FF6500] transition-colors duration-200 text-sm font-medium"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSection;
