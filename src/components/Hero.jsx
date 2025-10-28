const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Alex Morgan</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Frontend Developer & UI/UX Designer
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              I create beautiful, responsive websites with modern technologies
              and a focus on user experience.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-80 h-80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
