function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-24 flex items-center"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">

        <div className="bg-[#111827] rounded-[40px] p-14">

          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-[#22e48b]">
              Contact
            </p>

            <h2 className="text-6xl font-black mt-4">
              Let's Work Together
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="space-y-6">

              <p>📧 yourgmail@gmail.com</p>

              <p>📱 +855 12 345 678</p>

            </div>

            <div className="space-y-6">

              <a href="#">GitHub</a>

              <a href="#" className="block">
                Instagram
              </a>

              <a href="#" className="block">
                LinkedIn
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;