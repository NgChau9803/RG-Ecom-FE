
import React from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const WishlistPage: React.FC = () => {
  const { wishlist } = useAppContext();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700">Your wishlist is empty</h2>
          <p className="text-gray-500 mt-2">Add items you love to your wishlist to save them for later.</p>
          <Link to="/products" className="mt-6 inline-block bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition-colors">
            Discover Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {wishlist.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
