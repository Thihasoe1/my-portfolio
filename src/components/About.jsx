import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Senior Flutter Developer",
    company: "Strategy First Education Group",
    period: "May 2024 - Present",
    description:
      "Architected and maintained educational apps reaching 100k+ downloads. Applied Clean Architecture and TDD (>85% coverage). Integrated offline-first capabilities to support users in low-connectivity regions.",
    achievements: [
      "Built offline-first Hive + Firebase caching, ensuring uninterrupted learning.",
      "Engineered modular feature-flag system via Firebase Remote Config.",
      "Reduced crash rate by 70% using proactive Firebase Crashlytics monitoring.",
    ],
  },
  {
    id: 2,
    role: "Junior Mobile Developer",
    company: "Spectrum Soft Technology - (Remote)",
    period: "July 2023 - Feb 2024",
    description:
      "Developed secure banking authentication features. Improved load performance using Riverpod state management. Integrated REST APIs and maintained full test coverage.",
    achievements: [
      "Optimized app startup time by 25% by migrating state logic to Riverpod.",
      "Reduced UI-related production bugs by 20% by implementing rigorous integration tests.",
    ],
  },
  {
    id: 3,
    role: "Junior Mobile Developer",
    company: "Amicus Realty & Service Center",
    period: "June 2022 - June 2023",
    description:
      "Built cross-platform real estate apps with interactive mapping and real-time updates using getX and GraphQL.",
    achievements: [
      "Implemented Google Maps clustering for 500+ markers, eliminating lag.",
      "Optimized GraphQL queries, reducing payloads by 40% and cutting load times by 1.2s.",
    ],
  },
];

const AboutPage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="about" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-brand-900/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-brand-400 uppercase mb-3">
            Career Journey
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            Working Experience
          </h3>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={item}
              className="relative group pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 gap-8 items-start">
                
                {/* Timeline Line & Dot (Desktop & Mobile) */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 md:left-[19.5%] md:translate-x-[-0.5px] group-last:bottom-auto group-last:h-full">
                  <div className="absolute top-2 -left-1.5 md:left-[-5.5px] w-3 h-3 rounded-full bg-slate-800 border-2 border-brand-500 group-hover:bg-brand-400 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.6)] transition-all duration-300 z-10" />
                </div>

                {/* Period (Desktop Left Sidebar) */}
                <div className="hidden md:block col-span-1 pt-1 text-right pr-4">
                  <span className="text-sm font-mono text-slate-400 group-hover:text-brand-300 transition-colors">
                    {exp.period}
                  </span>
                </div>

                {/* Content Card */}
                <div className="col-span-4 mt-1 md:mt-0 pb-12 group-last:pb-0">
                  <div className="glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1">
                    <div className="md:hidden mb-3">
                      <span className="text-xs font-mono px-2 py-1 rounded bg-brand-500/10 text-brand-300 border border-brand-500/20">
                        {exp.period}
                      </span>
                    </div>
                    
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-300 group-hover:to-accent-300 transition-all duration-300">
                      {exp.role}
                    </h4>
                    <p className="text-brand-400 font-medium mb-4">{exp.company}</p>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <h5 className="text-sm font-semibold text-slate-200 mb-3 uppercase tracking-wider">
                        Key Achievements
                      </h5>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-slate-400 group/item">
                            <span className="text-accent-400 mr-2 mt-1 opacity-70 group-hover/item:opacity-100 transition-opacity">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            <span className="leading-relaxed text-sm md:text-base group-hover/item:text-slate-300 transition-colors">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default AboutPage;