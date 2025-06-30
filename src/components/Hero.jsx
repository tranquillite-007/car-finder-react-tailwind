import carImage from "../assets/cars/Ford Mustang Mach-E.webp";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0 bg-[#FBF8EF] dark:bg-[#0B192C] z-0" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#78B3CE] to-[#C9E6F0] dark:from-[#000000] dark:to-[#0B192C] z-10" />

      <div className="container mx-auto px-6 py-24 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-2 bg-[#F96E2A]/10 rounded-full">
              <p className="text-sm font-medium text-[#F96E2A]">New Arrival</p>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-[#0B192C] dark:text-white leading-tight">
              Electrify Your <span className="text-[#F96E2A]">Drive</span>
            </h1>

            <p className="text-xl text-[#1E3E62] dark:text-gray-300">
              Experience the future of driving with our premium electric vehicle
              collection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-[#F96E2A] text-white rounded-full font-medium hover:bg-[#e05d20] transition-colors">
                Book a Test Drive
              </button>
              <button className="px-8 py-3 border-2 border-[#78B3CE] text-[#0B192C] dark:text-white rounded-full font-medium hover:bg-[#78B3CE]/10 transition-colors">
                Explore Inventory
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div>
                <p className="text-3xl font-bold text-[#0B192C] dark:text-white">
                  320mi
                </p>
                <p className="text-sm text-[#1E3E62] dark:text-gray-400">
                  Range
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#0B192C] dark:text-white">
                  4.8s
                </p>
                <p className="text-sm text-[#1E3E62] dark:text-gray-400">
                  0-60 mph
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#0B192C] dark:text-white">
                  AWD
                </p>
                <p className="text-sm text-[#1E3E62] dark:text-gray-400">
                  Drive System
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative">
              <img
                src={carImage}
                alt="Ford Mustang Mach-E"
                className="w-full max-w-2xl mx-auto rounded-3xl shadow-2xl transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#F96E2A]/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#78B3CE]/20 rounded-full -z-10" />
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#0B192C] dark:text-white">
                  $42,995
                </p>
                <p className="text-sm text-[#1E3E62] dark:text-gray-400">
                  Starting price
                </p>
              </div>
              <div className="h-12 w-px bg-[#78B3CE] dark:bg-gray-600" />
              <div className="text-center">
                <p className="text-2xl font-bold text-[#0B192C] dark:text-white">
                  $7,500
                </p>
                <p className="text-sm text-[#1E3E62] dark:text-gray-400">
                  Tax credit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
