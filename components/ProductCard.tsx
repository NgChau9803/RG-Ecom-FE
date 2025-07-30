
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useAppContext } from '../hooks/useAppContext';
import StarRating from './StarRating';
import { ICONS } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useAppContext();
  const isWishlisted = isInWishlist(product.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 group">
      <Link to={`/product/${product.id}`}>
        <div className="relative">
          <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
          <button 
            onClick={handleWishlistClick}
            className={`absolute top-2 right-2 p-2 rounded-full transition-colors duration-300 ${isWishlisted ? 'bg-red-500 text-white' : 'bg-white/70 text-gray-700 hover:bg-white'}`}
          >
            {ICONS.wishlist}
          </button>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{product.category}</p>
          <div className="flex items-center mt-2">
            <StarRating rating={product.rating} />
            <span className="text-xs text-gray-500 ml-2">({product.reviewCount} reviews)</span>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(product);
              }} 
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
