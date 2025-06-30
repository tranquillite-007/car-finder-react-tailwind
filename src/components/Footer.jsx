const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#0B192C] border-t border-gray-100 dark:border-[#1E3E62]">
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          Find your dream car with CarFinder
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} CarFinder. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
