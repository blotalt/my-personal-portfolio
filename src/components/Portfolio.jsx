function Portfolio() {
  return (
  <section id="portfolio" className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">
          <p className="uppercase tracking-[4px] text-[#22e48b]">
            Portfolio
          </p>

          <h2 className="text-5xl font-black mt-4">
            My Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            className="rounded-3xl h-[300px] object-cover w-full"
          />

          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
            className="rounded-3xl h-[300px] object-cover w-full"
          />

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            className="rounded-3xl h-[300px] object-cover w-full"
          />

        </div>
      </div>
    </section>
  );
}

export default Portfolio;