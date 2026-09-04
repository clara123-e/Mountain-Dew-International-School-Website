import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { userEmail } = useAuth();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-school-red mb-4">Dashboard</h1>
      <p className="text-gray-700">
        {userEmail
          ? `Welcome back, ${userEmail}. This page is only visible to logged in users.`
          : "Welcome back. This page is only visible to logged in users."}
      </p>
    </div>
  );
}

export default Dashboard;