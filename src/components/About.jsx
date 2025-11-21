import { motion } from "framer-motion";

const AboutPage = () => {
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

  const experiences = [
    {
      id: 1,
      role: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      period: 'Jan 2022 - Present',
      description: 'Lead development of responsive web applications using React, TypeScript, and modern CSS frameworks.',
      achievements: [
        'Improved application performance by 40%',
        'Mentored 5 junior developers',
        'Implemented CI/CD pipelines'
      ]
    },
    {
      id: 2,
      role: 'Frontend Developer',
      company: 'Digital Solutions LLC',
      period: 'Mar 2020 - Dec 2021',
      description: 'Developed user interfaces for client projects using React ecosystem.',
      achievements: [
        'Delivered 10+ client projects on time',
        'Reduced bundle size by 30%',
        'Implemented design system'
      ]
    },
    {
      id: 3,
      role: 'Web Developer',
      company: 'StartUp Ventures',
      period: 'Jun 2018 - Feb 2020',
      description: 'Created responsive websites and web applications for early-stage startups.',
      achievements: [
        'Built MVPs for 5 startups',
        'Achieved 95%+ performance scores',
        'Integrated with multiple APIs'
      ]
    }
  ];

  return (
    <section id='about' className="min-h-screen flex items-center pt-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <motion.header 
          className="text-center mb-16"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 
            variants={item}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
          >
            Working Experience
          </motion.h1>
        </motion.header>

        {/* Experience Section */}
        <motion.section 
          className="mb-16"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="space-y-8">
            {experiences.map((exp) => (
              <motion.div 
                key={exp.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                variants={item}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                      <p className="text-blue-500 font-medium">{exp.company}</p>
                    </div>
                    <span className="inline-block bg-indigo-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="mt-4 text-gray-600">{exp.description}</p>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start"
                          variants={item}
                          whileHover={{ x: 5 }}
                        >
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          className="mb-16"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h2 
            variants={item}
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
          >
            Technical Skills
          </motion.h2>
          
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
            variants={item}
          >
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux', 'GraphQL', 'Jest', 'Node.js'].map((skill, idx) => (
                <motion.div 
                  key={idx} 
                  className="bg-gray-50 p-4 rounded-lg text-center transition-transform duration-300 hover:scale-105"
                  variants={item}
                  whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                >
                  <div className="font-medium text-gray-800">{skill}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section 
          className="text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.section>
      </div>
    </section>
  );
};

export default AboutPage;