import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div>
      {/* Page header */}
      <section className="bg-school-red text-white text-center py-16 px-6">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact details */}
        <div>
          <h2 className="text-2xl font-bold text-school-red mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Have a question about admissions, our programs, or anything else?
            Reach out and someone from our team will get back to you.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>Address:</strong> Accra, Ghana
            </li>
            <li>
              <strong>Phone:</strong> +233 000 000 000
            </li>
            <li>
              <strong>Email:</strong> info@mountaindewschool.edu.gh
            </li>
          </ul>
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
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
            <label className="text-sm text-gray-700">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows="5"
              className="border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-school-red text-white font-semibold py-3 rounded-md hover:opacity-90 transition"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-green-600 text-sm mt-2">
              Thanks for reaching out. We will get back to you soon.
            </p>
          )}
        </form>
      </section>
    </div>
  );
}

export default Contact;