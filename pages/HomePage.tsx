
import React from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);
  const newArrivals = PRODUCTS.slice(4, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img src="https://picsum.photos/seed/hero/1600/600" alt="Hero background" className="absolute inset-0 w-full h-full object-cover opacity-50"/>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Discover Your Next Favorite Thing
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
            Explore thousands of unique products from creators around the world.
          </p>
          <div className="mt-8">
            <Link 
              to="/products"
              className="inline-block bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Products Section */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
