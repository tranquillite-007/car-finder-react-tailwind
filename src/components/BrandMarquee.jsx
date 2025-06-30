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

  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="marquee-container marquee-fullwidth">
      <div className="animate-marquee">
        {duplicatedBrands.map((brand, index) => (
          <React.Fragment key={`${brand}-${index}`}>
            <span className="mx-4 text-xl md:text-2xl font-bold tracking-wider stroke-text">
              {brand}
            </span>
            <span className="text-xl md:text-2xl text-[#F96E2A] mx-1">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BrandMarquee;
