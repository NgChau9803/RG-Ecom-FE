
import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ICONS } from '../constants';

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) {
      return [];
    }
    return PRODUCTS.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[calc(100vh-8rem)]">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6 text-center">Search for Products</h1>
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for headphones, chairs, coffee..."
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
            {ICONS.search}
          </div>
        </div>
      </div>

      <div className="mt-12">
        {searchTerm && (
          <p className="text-center text-gray-600 mb-8">
            Found {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''} for "{searchTerm}"
          </p>
        )}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          searchTerm && (
            <div className="text-center py-16">
              <h2 className="text-xl font-semibold text-gray-700">No products found</h2>
              <p className="text-gray-500 mt-2">Try a different search term or browse our categories.</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SearchPage;
