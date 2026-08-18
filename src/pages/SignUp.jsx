import { useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div>
      {/* Page header */}
      <section className="bg-school-red text-white text-center py-16 px-6">
        <h1 className="text-4xl font-bold">Sign Up</h1>
      </section>

      <section className="max-w-md mx-auto px-6 py-16">
        <p className="text-gray-700 text-center mb-8">
          Create an account to get started.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700">First Name</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700">Last Name</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700">Password</label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent border-none p-1"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700">Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-school-red text-white font-semibold py-3 rounded-md hover:opacity-90 transition mt-2"
          >
            Sign Up
          </button>

          {submitted && (
            <p className="text-green-600 text-sm text-center mt-2">
              Account created. Check the console.
            </p>
          )}
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-school-red font-semibold hover:underline">
            Log in here
          </a>
        </p>
      </section>
    </div>
  );
}

export default SignUp;