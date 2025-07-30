
import React from 'react';
import { Link } from 'react-router-dom';

const SellerShopPage: React.FC = () => {
  // Mock data for seller dashboard
  const stats = [
    { name: 'Total Revenue', value: '$45,231.89' },
    { name: 'Total Sales', value: '1,204' },
    { name: 'Active Listings', value: '78' },
    { name: 'Pending Orders', value: '12' },
  ];

  const recentListings = [
    { id: 1, name: 'Handmade Leather Wallet', price: 75.00 },
    { id: 2, name: 'Custom Engraved Cutting Board', price: 45.00 },
    { id: 3, name: 'Vintage Film Camera', price: 220.00 },
  ];
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Seller Dashboard</h1>
        <Link to="/product/new" className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition-colors">
          List New Product
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(stat => (
          <div key={stat.name} className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm font-medium text-gray-500">{stat.name}</p>
            <p className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Listings */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">My Listings</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {recentListings.map(listing => (
              <li key={listing.id} className="p-4 flex justify-between items-center hover:bg-gray-50">
                <p className="font-medium text-gray-800">{listing.name}</p>
                <div className="flex items-center space-x-4">
                  <p className="text-gray-600">${listing.price.toFixed(2)}</p>
                  <button className="text-sm text-indigo-600 hover:underline">Edit</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SellerShopPage;
