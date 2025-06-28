export const mockCars = [
  {
    id: 1,
    name: "Toyota Camry 2023",
    brand: "Toyota",
    price: 28000,
    year: 2023,
    fuelType: "Petrol",
    seatingCapacity: 5,
    transmission: "Automatic",
    mileage: "25 MPG City / 34 MPG Highway",
    image: require("../assets/cars/toyota-camry.webp"),
    description:
      "The Toyota Camry is a comfortable and reliable midsize sedan...",
  },
  {
    id: 2,
    name: "Honda Civic 2023",
    brand: "Honda",
    price: 24500,
    year: 2023,
    fuelType: "Petrol",
    seatingCapacity: 5,
    transmission: "Automatic",
    mileage: "32 MPG City / 42 MPG Highway",
    image: require("../assets/cars/Honda Civic 2023.webp"),
    description:
      "The Honda Civic offers a sporty design with impressive fuel efficiency.",
  },
  {
    id: 3,
    name: "Ford Mustang Mach-E",
    brand: "Ford",
    price: 43000,
    year: 2023,
    fuelType: "Electric",
    seatingCapacity: 5,
    transmission: "Automatic",
    mileage: "90 MPGe",
    image: require("../assets/cars/Ford Mustang Mach-E.webp"),
    description: "An all-electric SUV with Mustang styling and performance.",
  },
  {
    id: 4,
    name: "Tesla Model 3",
    brand: "Tesla",
    price: 46990,
    year: 2023,
    fuelType: "Electric",
    seatingCapacity: 5,
    transmission: "Automatic",
    mileage: "132 MPGe",
    image: require("../assets/cars/Tesla Model 3.webp"),
    description:
      "Premium electric sedan with cutting-edge technology and performance.",
  },
  {
    id: 5,
    name: "Hyundai Tucson",
    brand: "Hyundai",
    price: 34950,
    year: 2023,
    fuelType: "Hybrid",
    seatingCapacity: 5,
    transmission: "Automatic",
    mileage: "38 MPG Combined",
    image: require("../assets/cars/Hyundai Tucson.webp"),
    description: "Stylish and efficient compact SUV with hybrid option.",
  },
  {
    id: 6,
    name: "BMW 3 Series",
    brand: "BMW",
    price: 43900,
    year: 2023,
    fuelType: "Petrol",
    seatingCapacity: 5,
    transmission: "Automatic",
    mileage: "26 MPG City / 36 MPG Highway",
    image: require("../assets/cars/BMW 3 Series.webp"),
    description:
      "Luxury sports sedan with excellent handling and premium features.",
  },
  {
    id: 7,
    name: "Chevrolet Tahoe",
    brand: "Chevrolet",
    price: 53900,
    year: 2023,
    fuelType: "Diesel",
    seatingCapacity: 8,
    transmission: "Automatic",
    mileage: "21 MPG City / 28 MPG Highway",
    image: require("../assets/cars/Chevrolet Tahoe.webp"),
    description:
      "Full-size SUV with powerful engine options and spacious interior.",
  },
  {
    id: 8,
    name: "Subaru Outback",
    brand: "Subaru",
    price: 27945,
    year: 2023,
    fuelType: "Petrol",
    seatingCapacity: 5,
    transmission: "Automatic",
    mileage: "26 MPG City / 32 MPG Highway",
    image: require("../assets/cars/Subaru Outback.webp"),
    description:
      "Rugged wagon with standard all-wheel drive and great ground clearance.",
  },
  {
    id: 9,
    name: "Volkswagen ID.4",
    brand: "Volkswagen",
    price: 38995,
    year: 2023,
    fuelType: "Electric",
    seatingCapacity: 5,
    transmission: "Automatic",
    mileage: "107 MPGe",
    image: require("../assets/cars/Volkswagen ID.4.webp"),
    description:
      "Electric SUV with spacious interior and smooth driving experience.",
  },
  {
    id: 10,
    name: "Jeep Wrangler",
    brand: "Jeep",
    price: 31995,
    year: 2023,
    fuelType: "Petrol",
    seatingCapacity: 5,
    transmission: "Manual",
    mileage: "22 MPG City / 29 MPG Highway",
    image: require("../assets/cars/Jeep Wrangler.webp"),
    description: "Iconic off-road vehicle with removable doors and roof.",
  },
  {
    id: 11,
    name: "Kia Sorento",
    brand: "Kia",
    price: 29990,
    year: 2023,
    fuelType: "Hybrid",
    seatingCapacity: 7,
    transmission: "Automatic",
    mileage: "39 MPG Combined",
    image: require("../assets/cars/Kia Sorento.webp"),
    description: "Three-row SUV with hybrid option and upscale interior.",
  },
  {
    id: 12,
    name: "Mercedes-Benz E-Class",
    brand: "Mercedes",
    price: 55950,
    year: 2023,
    fuelType: "Petrol",
    seatingCapacity: 5,
    transmission: "Automatic",
    mileage: "24 MPG City / 32 MPG Highway",
    image: require("../assets/cars/Mercedes-Benz E-Class.webp"),
    description: "Luxury sedan with advanced technology and refined ride.",
  },
  {
    id: 13,
    name: "Nissan Rogue",
    brand: "Nissan",
    price: 27260,
    year: 2023,
    fuelType: "Petrol",
    seatingCapacity: 5,
    transmission: "Automatic",
    mileage: "30 MPG City / 37 MPG Highway",
    image: require("../assets/cars/Nissan Rogue.webp"),
    description: "Compact SUV with comfortable ride and good fuel economy.",
  },
  {
    id: 14,
    name: "Audi Q5",
    brand: "Audi",
    price: 43900,
    year: 2023,
    fuelType: "Petrol",
    seatingCapacity: 5,
    transmission: "Automatic",
    mileage: "23 MPG City / 29 MPG Highway",
    image: require("../assets/cars/Audi Q5.webp"),
    description: "Luxury compact SUV with premium interior and tech features.",
  },
  {
    id: 15,
    name: "Lexus RX",
    brand: "Lexus",
    price: 48100,
    year: 2023,
    fuelType: "Hybrid",
    seatingCapacity: 5,
    transmission: "Automatic",
    mileage: "31 MPG Combined",
    image: require("../assets/cars/Lexus RX.webp"),
    description: "Luxury SUV with hybrid option and quiet, comfortable ride.",
  },
];

export const fetchMockCars = async (params = {}) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  let filteredCars = [...mockCars];

  // filter code for cars
  if (params.brand) {
    filteredCars = filteredCars.filter((car) =>
      car.brand.toLowerCase().includes(params.brand.toLowerCase())
    );
  }

  if (params.minPrice) {
    filteredCars = filteredCars.filter(
      (car) => car.price >= Number(params.minPrice)
    );
  }

  if (params.maxPrice) {
    filteredCars = filteredCars.filter(
      (car) => car.price <= Number(params.maxPrice)
    );
  }

  if (params.fuelType) {
    filteredCars = filteredCars.filter(
      (car) => car.fuelType.toLowerCase() === params.fuelType.toLowerCase()
    );
  }

  if (params.seatingCapacity) {
    filteredCars = filteredCars.filter(
      (car) => car.seatingCapacity === Number(params.seatingCapacity)
    );
  }

  // Search query
  if (params.q) {
    const query = params.q.toLowerCase();
    filteredCars = filteredCars.filter(
      (car) =>
        car.name.toLowerCase().includes(query) ||
        car.brand.toLowerCase().includes(query) ||
        (car.description && car.description.toLowerCase().includes(query))
    );
  }

  // Sorting car based on there price low and high
  if (params.sort) {
    if (params.sort === "price-asc") {
      filteredCars.sort((a, b) => a.price - b.price);
    } else if (params.sort === "price-desc") {
      filteredCars.sort((a, b) => b.price - a.price);
    }
  }

  return filteredCars;
};

export const fetchMockCarDetails = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const car = mockCars.find((car) => car.id === Number(id));
  return car || null;
};
