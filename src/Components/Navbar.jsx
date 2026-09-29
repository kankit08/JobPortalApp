import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <header className="border-b border-gray-200  bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-xl font-bold text-gray-900">
            Job Portal
          </Link>

          {/* Links on medium and larger screens */}
          <div className="hidden items-center gap-6 md:flex">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-600">
              Login
            </Link>
            <Link to="/signup" className="text-gray-700 hover:text-blue-600">
              Sign up
            </Link>
          </div>

          {/* Button on smaller screens */}
          <button
            type="button"
            className="text-2xl md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* Mobile links appear when the button is clicked */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="flex flex-col gap-4 border-t border-gray-200 px-6 py-4 md:hidden items-center">
            <Link to="/" className="text-gray-700">
              Home
            </Link>
            <Link to="/login" className="text-gray-700">
              Login
            </Link>
            <Link to="/signup" className="text-gray-700">
              Sign up
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
