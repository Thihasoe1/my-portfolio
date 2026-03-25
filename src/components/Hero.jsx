import { motion } from "framer-motion";
import profileImage from "@/assets/ths.jpeg";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const float = {
    animate: {
      y: [0, -20, 0],
      rotate: [-1, 1, -1],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Dynamic Glow Behind Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-8 text-center md:text-left order-2 md:order-1"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-brand-300 text-sm font-medium border border-brand-500/30">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-500"></span>
                </span>
                Available for new opportunities
              </span>
            </motion.div>
            
            <motion.h1
              variants={item}
              className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]"
            >
              Building digital
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-accent-300 to-brand-300">
                experiences
              </span>
            </motion.h1>

            <motion.h2
              variants={item}
              className="text-2xl lg:text-3xl text-slate-300 font-medium h-10"
            >
              <span className="typewriter inline-block text-brand-400">Mobile App Developer.</span>
            </motion.h2>

            <motion.p
              variants={item}
              className="text-lg text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed"
            >
              Over 3 years of experience architecting and developing scalable, high-performance mobile applications for finance, education, and real estate.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <motion.a
                href="#projects"
                className="relative group px-8 py-4 rounded-xl font-semibold text-white overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-accent-600 transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </motion.a>
              
              <motion.a
                href="#contact"
                className="px-8 py-4 rounded-xl font-semibold text-slate-300 glass-card hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Animated Image */}
          <motion.div
            className="flex justify-center items-center order-1 md:order-2"
            variants={item}
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
          >
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              variants={float}
              animate="animate"
            >
              {/* Outer decorative rings */}
              <div className="absolute inset-0 rounded-full border border-brand-500/30 scale-[1.15] animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-0 rounded-full border border-accent-500/20 scale-[1.3] animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Glow Behind */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-500/40 to-accent-500/40 blur-2xl" />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full p-2 glass-panel overflow-hidden z-10">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                  <img
                    src={profileImage}
                    alt="Saw Thi Ha Soe"
                    className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
