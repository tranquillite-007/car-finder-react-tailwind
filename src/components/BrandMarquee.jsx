import React from "react";

const BrandMarquee = () => {
  const brands = [
    "Toyota",
    "Honda",
    "Ford",
    "Tesla",
    "Hyundai",
    "BMW",
    "Jeep",
    "Kia",
    "Nissan",
    "Mercedes",
    "Audi",
    "Chevrolet",
    "Volkswagen",
    "Subaru",
    "Lexus",
  ];

  return (
    <div className="overflow-hidden bg-transparent py-4">
      <div className="animate-marquee whitespace-nowrap">
        {brands.map((brand, index) => (
          <React.Fragment key={brand}>
            <span className="mx-6 text-2xl font-bold tracking-wider text-transparent stroke-text">
              {brand}
            </span>
            {index < brands.length - 1 && (
              <span className="text-2xl text-yellow-500 mx-2">★</span>
            )}
          </React.Fragment>
        ))}
        {/* Duplicate for seamless looping */}
        {brands.map((brand, index) => (
          <React.Fragment key={`${brand}-2`}>
            <span className="mx-6 text-2xl font-bold tracking-wider text-transparent stroke-text">
              {brand}
            </span>
            {index < brands.length - 1 && (
              <span className="text-2xl text-yellow-500 mx-2">★</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BrandMarquee;
