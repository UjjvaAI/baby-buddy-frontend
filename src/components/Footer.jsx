import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="max-w-6xl mx-auto px-4">
      <p className="text-sm text-center">
        &copy; {new Date().getFullYear()} Baby Buddy. All rights reserved.
      </p>
      <div className="flex justify-center mt-4 space-x-4 text-sm">
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/shipping-policy" className="hover:underline">Shipping</Link>
        <Link to="/terms" className="hover:underline">Terms</Link>
        <Link to="/refund-policy" className="hover:underline">Refunds</Link>
        <Link to="/privacy-policy" className="hover:underline">Privacy</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
