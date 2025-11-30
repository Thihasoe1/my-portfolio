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
      role: 'Senior Flutter Developer',
      company: 'Strategy First Education Group',
      period: 'May 2024 - Present',
      description: ' Designed, developed, and maintained a suite of educational mobile applications targeting diverse learning needs, achieving over 100,000 combined downloads across iOS and Android platforms. Architected apps using Clean Architecture principles and rigorously applied Test-Driven Development (TDD) to maximize code quality, test coverage (>85%), and long-term scalability.',
      achievements: [
        'Integrated advanced offline-first capabilities with Hive + Firebase caching strategies, allowing uninterrupted learning during low-connectivity scenarios—critical for users in rural/underserved regions.',
        'Designed & implemented a modular feature-flag system (using Firebase Remote Config)',
        'Reduced crash rate by 70% (from 3.2% → 0.9%) via proactive Firebase Crashlytics monitoring, structured error logging, and systematic technical debt refactoring sprints.',
      ]
    },
    {
      id: 2,
      role: 'Junior Mobile Developer',
      company: 'Spectrum Soft Technology - (Remote)',
      period: 'July 2023 - Feb 2024',
      description: 'Developed secure banking authentication features using Flutter, Firebase Auth, and Navis SDK with role-based access control. Improved app load performance by 25% through Riverpod-based state management and widget optimization. Integrated RESTful APIs and collaborated with backend teams to reduce UI-related bugs by 20%. Followed Clean Architecture principles with full test coverage (unit & integration).',
      achievements: [
        'Improved app startup time by 25% by optimizing widget rebuilds and migrating legacy state logic to Riverpod, under mentorship.',
        'Reduced UI-related production bugs by 20% by proactively writing integration tests and collaborating with backend/QA teams on API contract validation.',
      ]
    },
    {
      id: 3,
      role: 'Junior Mobile Developer',
      company: 'Amicus Realty & Service Center',
      period: 'June 2022 - June 2023',
      description: 'Built cross-platform mobile apps for real estate clients using Flutter, Dart, and GetX. Integrated Google Maps SDK to display dynamic property markers, enhancing user navigation and engagement. Implemented GraphQL for efficient data fetching and real-time updates. Collaborated with designers and backend engineers in agile sprints to deliver scalable features.',
      achievements: [
        'Implemented Google Maps with custom clustering for 500+ markers — reduced map lag complaints by 75%.',
        'Optimized GraphQL queries → 40% smaller payloads, 1.2s faster load times on mid-tier devices.',
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
                    <span className="inline-block bg-indigo-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full w-fit">
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
              {['Dart', 'Flutter','Express.js', 'Node.js', 'GraphQL','Firebase','Hive', 'React.js'].map((skill, idx) => (
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
        {/* <motion.section 
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
        </motion.section> */}
      </div>
    </section>
  );
};

export default AboutPage;