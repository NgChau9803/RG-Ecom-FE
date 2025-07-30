
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-center text-sm text-gray-500">&copy; 2024 E-Commerce Fusion. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
