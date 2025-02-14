import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-background-color p-4">
      <ul className="text-white flex items-center justify-between w-full">
        {/* Left Section: Logo and My Tickets Button */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </Link>
      
        </div>

        {/* Right Section: Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-yellow-400">Events</Link>
          <Link to="/tickets" className="hover:text-yellow-400">My Tickets</Link>
          <Link to="/about" className="hover:text-yellow-400">About Project</Link>
        </div>
        <Link to="/my">
            <button className="px-4 py-2 bg-white text-black border border-white rounded hover:bg-yellow-400">
              <span>My Tickets</span> <span className="ml-1">→</span>
            </button>
          </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
