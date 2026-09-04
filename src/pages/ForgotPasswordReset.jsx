import { useState } from "react";

function ForgotPasswordReset() {
  const [formData, setFormData] = useState({
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

    console.log("New password set:", formData.password);
    setSubmitted(true);
  };

  return (
    <div>
      <section className="bg-school-red text-white text-center py-16 px-6">
        <h1 className="text-4xl font-bold">Reset Password</h1>
      </section>

      <section className="max-w-md mx-auto px-6 py-16">
        <p className="text-gray-700 text-center mb-8">
          Choose a new password for your account.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700">New Password</label>
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
            <label className="text-sm text-gray-700">Confirm New Password</label>
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
            Reset Password
          </button>

          {submitted && (
            <p className="text-green-600 text-sm text-center mt-2">
              Your password has been reset. You can now log in.
            </p>
          )}
        </form>
      </section>
    </div>
  );
}

export default ForgotPasswordReset;