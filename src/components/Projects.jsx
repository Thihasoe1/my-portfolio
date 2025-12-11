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
      "Waso Learn is a mobile-first learning application designed to bridge educational gaps for Basic Education High School students across Myanmar. As a flagship social business of Strategy First Education Group, Waso Learn delivers curriculum-aligned digital lessons for students from Kindergarten through Grade 12, ensuring equitable access to quality education—especially in underserved and remote communities. Built with offline-first functionality and low-data optimization, the platform enables students to download and study core subjects—including Myanmar Language, English, Mathematics, Science, and Social Studies—even without consistent internet connectivity. The app supports self-paced learning, interactive quizzes, progress tracking, and teacher-approved content aligned with the national curriculum.",
    tech: ["Dart", "Flutter", "Firebase", "Backend API"],
    image: `${wasolearn}`,
    iosLink: "https://apps.apple.com/th/app/waso-learn-kg-12/id1531073432",
    androidLink: "https://play.google.com/store/apps/details?id=com.sfu.waso_learn&pcampaignid=web_share",
  },
  {
    id: 2,
    title: "StrategyFirst Learn",
    description:
      "Strategy First International College is a top private college in Yangon and Mandalay, Myanmar, offering MBA programs, bachelor’s degrees in business and IT, and certificate and professional diploma programs for Myanmar students.",
    tech: ["Dart", "Firebase", "Flutter", "REST API"],
    image: `${sfulearn}`,
    iosLink: "https://apps.apple.com/us/app/strategyfirst-learn/id6444846287",
    androidLink: "https://play.google.com/store/apps/details?id=com.sfu.studentapp&pcampaignid=web_share",
  },
  {
    id: 3,
    title: "StrategyFirst Extension (SFUx)",
    description: "SFUx is an online learning application founded in Myanmar. We offer certified programs in key areas such as business management, human resources, operations management, technology, and digital marketing. Our courses are designed to equip students with the skills necessary for success in the modern business world.",
    tech: ["Dart", "Flutter", "Firebase", "REST API"],
    image: `${sfux}`,
    iosLink: "https://apps.apple.com/th/app/sfux/id1506353798",
    androidLink: "https://play.google.com/store/apps/details?id=com.edu.sfuxlearn&pcampaignid=web_share",
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    description: "Putet Comics is one of the largest publishers of Myanmar comics, featuring a wide variety of characters including Tutpi, Poe Zar, Shwe Ei Shwe Boat, Jouk Jack and many many more. With Putet Comics App, you can download and enjoy great comics from our current weekly journals plus our vast classics library. You can also download the Buddhist comics for free.",
    tech: ["Dart", "Flutter", "Firebase", "REST API"],
    image: `${putet}`,
    iosLink: "https://apps.apple.com/us/app/putet-comics-2-0/id1559173511",
    androidLink: "https://play.google.com/store/apps/details?id=com.putet.comic&pcampaignid=web_share",
  }
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
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
                y: 0,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-shadow"
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

                {/* Buttons Section */}
                <div className="flex gap-3 mt-6">
                  <a
                    href={project.iosLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center cursor-pointer bg-black text-white py-3 rounded-lg font-medium hover:bg-black/80 transition"
                  >
                    <FaApple className="inline-block mr-2 mb-1" size={18} />
                    App Store
                  </a>

                  <a
                    href={project.androidLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 cursor-pointer text-center bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition"
                  >
                    <FaGooglePlay className="inline-block mr-2" size={16} />
                    Google Play
                  </a>
                </div>
              </div>
            </motion.div>

            // <motion.div
            //   key={project.id}
            //   variants={item}
            //   whileHover={{
            //     y: -10,
            //     transition: { duration: 0.3 },
            //   }}
            //   className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            // >
            //   <div className="h-48 bg-linear-to-r from-blue-600/10 to-blue-100 border-b border-gray-100">
            //     <img
            //       src={project.image}
            //       alt="Description"
            //       className="w-full h-full object-cover"
            //     />
            //   </div>
            //   <div className="p-6">
            //     <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            //     <p className="line-clamp-2 text-gray-600 mb-4">
            //       {project.description}
            //     </p>
            //     {/* <div className="flex flex-wrap gap-2">
            //       {project.tech.map((tech, idx) => (
            //         <motion.span
            //           key={idx}
            //           initial={{ opacity: 0, scale: 0.8 }}
            //           animate={{ opacity: 1, scale: 1 }}
            //           transition={{ delay: 0.3 + idx * 0.1 }}
            //           className="bg-blue-700/12 text-primary px-3 py-1 rounded-full text-sm"
            //         >
            //           {tech}
            //         </motion.span>
            //       ))}
            //     </div> */}
            //   </div>
            // </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
