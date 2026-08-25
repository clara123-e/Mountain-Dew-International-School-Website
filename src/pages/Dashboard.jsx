import { useLocation } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const email = location.state?.email;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-school-red mb-4">Dashboard</h1>
      <p className="text-gray-700">
        {email
          ? `Welcome back, ${email}. This page is only visible to logged in users.`
          : "Welcome back. This page is only visible to logged in users."}
      </p>
    </div>
  );
}

export default Dashboard;