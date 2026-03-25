import { motion } from "framer-motion";

const skills = [
  { name: "Dart", level: 85, color: "from-blue-400 to-blue-600" },
  { name: "Flutter", level: 90, color: "from-cyan-400 to-cyan-600" },
  { name: "JavaScript", level: 65, color: "from-yellow-400 to-yellow-600" },
  { name: "React", level: 50, color: "from-sky-400 to-sky-600" },
  { name: "TypeScript", level: 50, color: "from-blue-500 to-blue-700" },
  { name: "Node.js", level: 55, color: "from-green-400 to-green-600" },
];

const otherSkills = ['Express.js', 'GraphQL', 'Firebase', 'Hive', 'Git', 'REST APIs'];

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="absolute right-0 top-0 w-96 h-96 bg-brand-800/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-brand-400 uppercase mb-3">
            Core Competencies
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            Technical Skills
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Skills with Progress Bars */}
          <div className="lg:col-span-2 space-y-8 glass-card rounded-3xl p-8">
            <h4 className="text-xl font-bold text-white mb-6">Language & Frameworks</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-brand-300 font-mono text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-slate-800/50 rounded-full overflow-hidden border border-slate-700/50">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}
                    >
                      {/* Shine effect */}
                      <div className="absolute top-0 left-0 bottom-0 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Skills Grid */}
          <div className="glass-card rounded-3xl p-8">
            <h4 className="text-xl font-bold text-white mb-6">Tools & Tech</h4>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-wrap gap-3"
            >
              {otherSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  variants={item}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-brand-500/50 text-slate-300 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>

            {/* Decorative element */}
            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-brand-900/50 to-slate-900 border border-brand-500/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="text-sm text-slate-400 italic relative z-10">
                "Continuously adapting to new technologies and architectural patterns to build robust mobile applications."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
