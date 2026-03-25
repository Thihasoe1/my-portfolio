import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import wasolearn from "@/assets/waso_learn.webp";
import sfulearn from "@/assets/strategy_first.png";
import sfux from "@/assets/sfux.png";
import putet from "@/assets/putet.png";

const projects = [
  {
    id: 1,
    title: "Waso Learn KG-12",
    description:
      "A mobile-first learning app bridging educational gaps for BEHS students across Myanmar. Features offline-first functionality, low-data optimization, and interactive quizzes for K-12 students.",
    tech: ["Dart", "Flutter", "Firebase", "Backend API"],
    image: wasolearn,
    iosLink: "https://apps.apple.com/th/app/waso-learn-kg-12/id1531073432",
    androidLink: "https://play.google.com/store/apps/details?id=com.sfu.waso_learn&pcampaignid=web_share",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    title: "StrategyFirst Learn",
    description:
      "A premium educational platform for Strategy First International College (Myanmar), providing mobile access to MBA programs, business degrees, and professional diplomas.",
    tech: ["Dart", "Firebase", "Flutter", "REST API"],
    image: sfulearn,
    iosLink: "https://apps.apple.com/us/app/strategyfirst-learn/id6444846287",
    androidLink: "https://play.google.com/store/apps/details?id=com.sfu.studentapp&pcampaignid=web_share",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 3,
    title: "StrategyFirst Extension",
    description:
      "SFUx is an online learning application offering certified programs in modern business management, digital marketing, and tech, optimized for seamless video streaming.",
    tech: ["Dart", "Flutter", "Firebase", "REST API"],
    image: sfux,
    iosLink: "https://apps.apple.com/th/app/sfux/id1506353798",
    androidLink: "https://play.google.com/store/apps/details?id=com.edu.sfuxlearn&pcampaignid=web_share",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 4,
    title: "Putet Comics",
    description:
      "A digital comic reader for Myanmar's largest comic publisher. Features a vast library of classics, modern releases, and offline downloading capabilities.",
    tech: ["Dart", "Flutter", "Firebase", "REST API"],
    image: putet,
    iosLink: "https://apps.apple.com/us/app/putet-comics-2-0/id1559173511",
    androidLink: "https://play.google.com/store/apps/details?id=com.putet.comic&pcampaignid=web_share",
    color: "from-orange-500 to-red-600",
  }
];

const Projects = () => {
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

  const item = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold tracking-widest text-brand-400 uppercase mb-3">
            Portfolio
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            Featured Projects
          </h3>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group relative h-full flex flex-col"
            >
              {/* Dynamic glowing shadow behind card */}
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${project.color} rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-500`} />
              
              <div className="relative h-full flex flex-col glass-card rounded-3xl overflow-hidden border border-slate-700/50 hover:border-slate-500/50 transition-colors duration-500 bg-slate-900/80">
                
                {/* Image Container with inner shadow */}
                <div className="relative h-64 overflow-hidden bg-slate-950 p-6 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-60" />
                  <motion.div 
                    className="relative z-0 w-full h-full rounded-xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6 flex-1 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-800">
                    {project.iosLink && (
                      <a
                        href={project.iosLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-sm bg-white text-slate-900 hover:bg-slate-200 transition-colors"
                      >
                        <FaApple size={18} />
                        App Store
                      </a>
                    )}
                    
                    {project.androidLink && (
                      <a
                        href={project.androidLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-sm bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-400 hover:to-emerald-500 transition-colors"
                      >
                        <FaGooglePlay size={16} />
                        Google Play
                      </a>
                    )}
                  </div>
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
