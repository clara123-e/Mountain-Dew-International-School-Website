import { useState } from "react";

function ForgotPasswordRequest() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset requested for:", email);
    setSubmitted(true);
  };

  return (
    <div>
      <section className="bg-school-red text-white text-center py-16 px-6">
        <h1 className="text-4xl font-bold">Forgot Password</h1>
      </section>

      <section className="max-w-md mx-auto px-6 py-16">
        <p className="text-gray-700 text-center mb-8">
          Enter your email and we will send you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-school-red text-white font-semibold py-3 rounded-md hover:opacity-90 transition mt-2"
          >
            Send Reset Link
          </button>

          {submitted && (
            <p className="text-green-600 text-sm text-center mt-2">
              If an account exists for that email, a reset link has been sent.
            </p>
          )}
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Remembered your password?{" "}
          <a href="/login" className="text-school-red font-semibold hover:underline">
            Log in here
          </a>
        </p>
      </section>
    </div>
  );
}

export default ForgotPasswordRequest;