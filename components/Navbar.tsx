
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';
import { ICONS } from '../constants';
import { UserRole } from '../types';

const Navbar: React.FC = () => {
  const { userRole, toggleRole, cart, wishlist } = useAppContext();

  const activeLinkStyle = {
    color: '#4f46e5',
    fontWeight: '600',
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 text-2xl font-bold text-indigo-600">
              Fusion
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink to="/" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
                <NavLink to="/products" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Products</NavLink>
                <NavLink to="/search" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Search</NavLink>
                {userRole === UserRole.Seller && (
                    <NavLink to="/seller-shop" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">My Shop</NavLink>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
             {/* Role Switch */}
            <div className="flex items-center">
                <span className={`text-sm font-medium ${userRole === UserRole.Buyer ? 'text-indigo-600' : 'text-gray-500'}`}>Buyer</span>
                <button onClick={toggleRole} className="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-2 bg-gray-200">
                    <span aria-hidden="true" className={`${userRole === UserRole.Seller ? 'translate-x-5' : 'translate-x-0'} inline-block h-5 w-5 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}></span>
                </button>
                <span className={`text-sm font-medium ${userRole === UserRole.Seller ? 'text-indigo-600' : 'text-gray-500'}`}>Seller</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <Link to="/wishlist" className="relative text-gray-600 hover:text-indigo-600 p-1">
                {ICONS.wishlist}
                {wishlist.length > 0 && <span className="absolute top-0 right-0 block h-4 w-4 rounded-full ring-2 ring-white bg-red-500 text-white text-xs text-center">{wishlist.length}</span>}
              </Link>
              <Link to="/cart" className="relative text-gray-600 hover:text-indigo-600 p-1">
                {ICONS.cart}
                {cart.length > 0 && <span className="absolute top-0 right-0 block h-4 w-4 rounded-full ring-2 ring-white bg-red-500 text-white text-xs text-center">{cart.reduce((count, item) => count + item.quantity, 0)}</span>}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
