import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-school-red text-white">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Mountain Dew International School Logo" className="h-12 w-12" />
         <div>
          <span className="font-bold text-lg block">Mountain Dew International School</span>
          <span className="text-xs text-white/80">A Journey to Excellence</span>
        </div>
      </div>
      <div className="flex gap-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/signup" className="hover:underline">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;