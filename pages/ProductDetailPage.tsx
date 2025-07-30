
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useAppContext } from '../hooks/useAppContext';
import StarRating from '../components/StarRating';
import ProductCard from '../components/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useAppContext();
  
  const product = PRODUCTS.find(p => p.id === Number(productId));

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link to="/" className="text-indigo-600 hover:underline mt-4 inline-block">Go back to Home</Link>
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);
  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img src={product.imageUrl} alt={product.name} className="w-full h-auto rounded-lg shadow-lg object-cover aspect-square" />
        </div>
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">{product.name}</h1>
          <p className="text-md text-gray-500 mt-2">{product.category}</p>
          <div className="flex items-center mt-4">
            <StarRating rating={product.rating} />
            <span className="text-sm text-gray-600 ml-3">{product.reviewCount} reviews</span>
          </div>
          <p className="text-3xl text-gray-900 mt-6">${product.price.toFixed(2)}</p>
          <p className="mt-6 text-gray-700 leading-relaxed">{product.description}</p>
          
          <div className="mt-8 flex items-center space-x-4">
            <button 
              onClick={() => addToCart(product)}
              className="flex-1 bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
            >
              Add to Cart
            </button>
            <button 
              onClick={() => isWishlisted ? removeFromWishlist(product.id) : addToWishlist(product)}
              className={`p-3 rounded-full border-2 transition-colors ${isWishlisted ? 'bg-red-100 border-red-500 text-red-500' : 'bg-gray-100 border-gray-200 text-gray-600 hover:bg-gray-200'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isWishlisted ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-24">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(related => <ProductCard key={related.id} product={related} />)}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
