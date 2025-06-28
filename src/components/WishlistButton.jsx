import { useState, useEffect } from "react";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";

const WishlistButton = ({ car }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setIsInWishlist(wishlist.some((item) => item.id === car.id));
  }, [car.id]);

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

    if (isInWishlist) {
      const updatedWishlist = wishlist.filter((item) => item.id !== car.id);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    } else {
      const updatedWishlist = [...wishlist, car];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }

    setIsInWishlist(!isInWishlist);

    window.dispatchEvent(new Event("storage"));
  };

  return (
    <button
      onClick={toggleWishlist}
      className="text-red-500 hover:text-red-600 transition-colors"
      aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
    >
      {isInWishlist ? (
        <HeartSolid className="h-6 w-6" />
      ) : (
        <HeartOutline className="h-6 w-6" />
      )}
    </button>
  );
};

export default WishlistButton;
