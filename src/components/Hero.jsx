import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const float = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Hi, I'm <span className="text-blue-500">Saw Thi Ha Soe</span>
            </motion.h1>

            <motion.h2
              variants={item}
              className="text-2xl md:text-3xl text-gray-600 font-semibold typewriter"
            >
              Mobile Application Developer
            </motion.h2>

            <motion.p
              variants={item}
              className="text-lg text-gray-700 max-w-lg"
            >
              I’m a Mobile Application Developer obsessed with crafting beautiful, intuitive, and high-performance mobile experiences. With a relentless focus on user experience, I transform ideas into seamless apps that people love to use — not just they work, but because they feel right.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="#contact"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Animated Image */}
          <motion.div
            className="flex justify-center"
            variants={item}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              className="bg-linear-to-br from-blue-500/20 to-blue-300 rounded-full w-64 h-64 md:w-80 md:h-80 flex items-center justify-center overflow-hidden"
              variants={float}
              animate="animate"
            >
              <img
                src="/src/assets/ths.jpeg" // Replace with your image path
                alt="profile image"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
