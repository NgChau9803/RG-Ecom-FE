
import React from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { Link } from 'react-router-dom';
import { ICONS } from '../constants';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateCartQuantity, cartTotal, clearCart } = useAppContext();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700">Your cart is empty</h2>
          <p className="text-gray-500 mt-2">Looks like you haven't added anything yet.</p>
          <Link to="/products" className="mt-6 inline-block bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition-colors">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow">
          <ul>
            {cart.map(item => (
              <li key={item.product.id} className="flex items-center p-4 sm:p-6 border-b last:border-b-0">
                <img src={item.product.imageUrl} alt={item.product.name} className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md" />
                <div className="ml-4 sm:ml-6 flex-grow">
                  <h3 className="text-md sm:text-lg font-semibold text-gray-800">{item.product.name}</h3>
                  <p className="text-sm text-gray-500">${item.product.price.toFixed(2)}</p>
                  <div className="mt-2 flex items-center">
                    <label htmlFor={`quantity-${item.product.id}`} className="sr-only">Quantity</label>
                    <input
                      id={`quantity-${item.product.id}`}
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateCartQuantity(item.product.id, parseInt(e.target.value, 10))}
                      className="w-16 p-1 border border-gray-300 rounded-md text-center"
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-md sm:text-lg font-semibold">${(item.product.price * item.quantity).toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item.product.id)} className="text-gray-500 hover:text-red-600 mt-2">
                    {ICONS.trash}
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="p-6 flex flex-col sm:flex-row justify-between items-center">
            <button onClick={clearCart} className="text-sm text-gray-600 hover:text-red-600 font-medium mb-4 sm:mb-0">
              Clear Cart
            </button>
            <div className="text-right">
              <p className="text-lg">
                <span className="font-medium text-gray-600">Subtotal:</span>
                <span className="font-bold text-gray-900 ml-2">${cartTotal.toFixed(2)}</span>
              </p>
              <button className="mt-4 w-full sm:w-auto bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-700 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
