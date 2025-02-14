import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Hero = () => {
  return (
    <nav className=" flex-col justify-center before:bg-background-color  p-4">
      <ul className="text-white flex items-center justify-between w-full px-8">
        {/* Left Section: Logo and My Tickets Button */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </Link>
          <Link to="/my">
            <button className="px-4 py-2 bg-white text-black border border-white rounded hover:bg-yellow-400">
              <span>My Tickets</span> <span className="ml-1">→</span>
            </button>
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Hero;
