import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Waso Learn KG-12",
    description:
      "Waso Learn is a mobile-first learning application designed to bridge educational gaps for Basic Education High School students across Myanmar. As a flagship social business of Strategy First Education Group, Waso Learn delivers curriculum-aligned digital lessons for students from Kindergarten through Grade 12, ensuring equitable access to quality education—especially in underserved and remote communities. Built with offline-first functionality and low-data optimization, the platform enables students to download and study core subjects—including Myanmar Language, English, Mathematics, Science, and Social Studies—even without consistent internet connectivity. The app supports self-paced learning, interactive quizzes, progress tracking, and teacher-approved content aligned with the national curriculum.",
    tech: ["Dart", "Flutter", "Firebase", "Backend API"],
    image: "/src/assets/waso_learn.webp",
  },
  {
    id: 2,
    title: "StrategyFirst Learn",
    description:
      "Productivity tool with drag-and-drop interface and team collaboration",
    tech: ["Vue.js", "Firebase", "Tailwind CSS"],
    image: "/src/assets/strategy_first.png",
  },
  {
    id: 3,
    title: "StrategyFirst Extension",
    description: "Real-time weather forecasting with location-based services",
    tech: ["React", "OpenWeather API", "Chart.js"],
    image: "/src/assets/sfux.png",
  },
];

const Projects = () => {
  // Animation for the container
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Animation for each project card
  const item = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-linear-to-r from-blue-600/10 to-blue-100 border-b border-gray-100">
                <img
                  src={project.image}
                  alt="Description"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="line-clamp-2 text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="bg-blue-700/12 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
