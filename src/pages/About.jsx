function About() {
  return (
    <div>
      {/* Page header */}
      <section className="bg-school-red text-white text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-2">About Us</h1>
      </section>

      {/* Mission section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-school-red mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-8 leading-relaxed">
          At Mountain Dew International School, we want every child who walks
          through our doors to feel supported, challenged, and genuinely
          excited to learn. Our teachers work closely with each student to
          build strong academic foundations while also shaping good character
          and discipline.
        </p>

        <h2 className="text-2xl font-bold text-school-red mb-4">Our Vision</h2>
        <p className="text-gray-700 mb-8 leading-relaxed">
          We are working to become one of the most trusted international
          schools in the region, known for the quality of our teaching and
          the wellbeing of our students, both inside and outside the
          classroom.
        </p>

        <h2 className="text-2xl font-bold text-school-red mb-4">What We Value</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <li className="bg-gray-50 border-l-4 border-school-red p-4 rounded">
            <strong>Excellence.</strong> We push our students to do their best, not just enough to pass.
          </li>
          <li className="bg-gray-50 border-l-4 border-school-red p-4 rounded">
            <strong>Discipline.</strong> We believe structure helps children grow into responsible people.
          </li>
          <li className="bg-gray-50 border-l-4 border-school-red p-4 rounded">
            <strong>Care.</strong> Every child's wellbeing matters to us, not just their grades.
          </li>
          <li className="bg-gray-50 border-l-4 border-school-red p-4 rounded">
            <strong>Curiosity.</strong> We want students who keep asking questions long after they leave us.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;