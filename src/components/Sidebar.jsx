import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Sidebar() {
  const { logout } = useAuth();

  return (
    <aside className="w-56 min-h-screen bg-school-blue text-white flex flex-col p-6 gap-4">
      <h2 className="text-lg font-bold mb-4">Dashboard Menu</h2>
      <Link to="/dashboard" className="hover:underline">Overview</Link>
      <Link to="/profile" className="hover:underline">My Profile</Link>
      <button
        onClick={logout}
        className="mt-auto bg-school-red text-white py-2 rounded-md hover:opacity-90"
      >
        Log Out
      </button>
    </aside>
  );
}

export default Sidebar;