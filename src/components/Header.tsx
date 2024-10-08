import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight hover:text-blue-200 transition-colors duration-300"
        >
          IMMORTAL SEO
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="hover:text-blue-200 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-200 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-200 transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300">
            <Search size={20} />
          </button>
          <button className="md:hidden p-2 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
