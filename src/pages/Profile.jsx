import { useAuth } from "../context/AuthContext";

function Profile() {
  const { userEmail } = useAuth();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-school-red mb-4">My Profile</h1>
      <div className="bg-gray-50 border border-gray-200 rounded-md p-6 max-w-md">
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> {userEmail || "Not available"}
        </p>
        <p className="text-gray-700">
          <strong>Role:</strong> Student
        </p>
      </div>
    </div>
  );
}

export default Profile;