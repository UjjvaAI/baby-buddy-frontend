import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { auth } from "../firebase";


const Navbar = () => {
  const { user } = useUser(); // ✅ Now declared properly
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-pink-200 shadow-lg px-2 py-2 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xs md:text-sm lg:text-md font-bold text-pink-600">
          👶 BabyBuddy
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
  <Link to="/" className="text-gray-700 hover:text-pink-600">Home</Link>
  <Link to="/cart" className="text-gray-700 hover:text-pink-600">Cart</Link>

  {!user ? (
    <Link to="/login" className="text-gray-700 hover:text-pink-600">Login</Link>
  ) : (
    <>
      <Link to="/my-orders" className="text-gray-700 hover:text-pink-600">
        My Orders
      </Link>
      <Link to="/profile">
        <img
          src="user-icon.svg" // Replace with actual path
          alt="User"
          className="w-8 h-8 rounded-full"
        />
      </Link>
      <button
        onClick={() => {
          auth.signOut();
          navigate("/login");
        }}
        className="text-red-600 hover:text-red-800 font-medium"
      >
        Logout
      </button>
    </>
  )}
</div>

        {/* Hamburger Button */}
        <button className="md:hidden text-md font-bold text-pink-600" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
  <div className="md:hidden mt-2 px-4 space-y-2 bg-pink-200 rounded shadow">
    <Link to="/" onClick={handleLinkClick} className="block text-gray-700">
      Home
    </Link>
    <Link to="/cart" onClick={handleLinkClick} className="block text-gray-700">
      Cart
    </Link>
    
    {user ? (
      <>
        <Link to="/profile" onClick={handleLinkClick} className="block text-gray-700">
          Profile
        </Link>
        <Link to="/my-orders" className="block text-gray-700">
  My Orders
</Link>

        
        <button
          onClick={() => {
            auth.signOut();
            setIsOpen(false); // close menu
            navigate("/login");
           

          
          }}
          className="block w-full text-left text-red-600 font-medium"
        >
          Logout
        </button>

      </>
    ) : (
      <>
        <Link to="/login" onClick={handleLinkClick} className="block text-gray-700">
          Login
        </Link>
       
      </>
    )}
  </div>
)}

    </nav>
  );
};

export default Navbar;
