function Home() {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-school-red text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Mountain Dew International School
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          A Journey to Excellence. We help students grow into confident,
          curious, well-rounded people, in a school that feels like a second
          home.
        </p>
        <a href="/about" className="bg-white text-school-red font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
          Learn More About Us
        </a>
      </section>

      {/* Highlights section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-16 max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2 text-school-red">Quality Education</h2>
          <p className="text-gray-600">
            Our curriculum is designed to prepare students for real success,
            not just good grades.
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2 text-school-red">Experienced Teachers</h2>
          <p className="text-gray-600">
            Our staff genuinely care about helping each student grow and
            build confidence.
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2 text-school-red">Safe Environment</h2>
          <p className="text-gray-600">
            A secure, supportive space where students feel comfortable enough
            to be themselves and learn.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;