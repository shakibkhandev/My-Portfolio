"use client";
import { useThemeState } from "@/context/zustand";
import { Colors } from "@/utils/Colors";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const cardHoverVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const data = {
  name: "Shakib Khan",
  profession: "Web & App Developer",
  about:
    "I'm a passionate developer specializing in web and app development. I thrive on learning new technologies, building innovative solutions, and exploring the potential of artificial intelligence. Currently, I'm working on personal projects to strengthen my skills in JavaScript, React Native, and machine learning. I'm always open to collaboration and eager to learn from others. Let’s build something amazing together!",
  image: "/profile.png",
  email: "mdshakibkhan.dev@gmail.com",
  social: {
    x: "https://x.com/shakibkhan",
    linkedin: "https://linkedin.com/in/shakib_khan_dev",
    github: "https://github.com/shakibkhandev",
  },
  experience: [],
  education: [
    {
      school: "Sylhet Govt. Pilot High School",
      degree: "Secondary School Certificate (SSC)",
      startDate: "01 Jan 2022",
      endDate: "14 Apr 2024",
    },
    {
      school: "MC College",
      degree: "Higher Secondary Certificate (HSC)",
      startDate: "10 Aug 2024",
      endDate: "10 May 2026",
    },
  ],
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "React Native",
    "Tailwind CSS",
    "Next.js",
    "TypeScript",
    "Python",
    "Postgresql",
    "MongoDB",
    "Firebase",
    "Git",
    "GitHub",
    "Docker",
    "C++",
    "Fast API"
  ],
  projects: [
    {
      name: "PDF Insight Assistant",
      image:
        "/pdf-insight-assistant.png",
      timeline: "21 Apr 2025 - 30 Apr 2025",
      details:
        "A powerful, interactive web application that allows users to chat with their PDF documents using AI. Built with Streamlit and powered by Google's Gemini AI, this tool enables users to extract meaningful insights from PDF documents through natural language conversations.",
      techStacks: ["Python", "Streamlit","Faiss" ,"Transformers" ,"Google's Gemini AI", "PDF Plumber", "Langchain"],
      url: "https://github.com/shakibkhandev/pdf-indight-assistant",
    },
    {
      name: "Filmflare",
      image:
        "https://raw.githubusercontent.com/shakibkhandev/Filmflare-Movie-Web-App/refs/heads/main/assets/01.png",
      timeline: "Jan 2025 - Feb 2025",
      details:
        "Filmflare is a movie discovery web application built with Next.js and TypeScript. It allows users to explore trending movies, search for their favorites, and view detailed information about each film.",
      techStacks: ["Next.js", "TypeScript", "TMDB", "Swiper"],
      url: "https://github.com/shakibkhandev/Filmflare-Movie-Web-App",
    },
    {
      name: "Expense Tracker",
      image:
        "https://raw.githubusercontent.com/shakibkhandev/Expense-Tracker-Web-App/refs/heads/main/assets/light.png",
      timeline: "Jan 2025 - Feb 2025",
      details:
        "Expense Tracker is a web application designed to help users manage their finances. Built with Next.js and TypeScript, it allows users to track expenses The app uses Local database.",
      techStacks: ["Next.js", "TypeScript", "Radix"],
      url: "https://github.com/shakibkhandev/Expense-Tracker-Web-App",
    },
    {
      name: "Spaceship",
      image:
        "https://raw.githubusercontent.com/shakibkhandev/Spaceship-Static-Site/refs/heads/main/assets/01.png",
      timeline: "Jan 2025 - Feb 2025",
      details:
        "Spaceship is a static website built with HTML, CSS, and JavaScript. It features a modern design and provides information about the app.",
      techStacks: ["HTML", "CSS", "JS"],
      url: "https://spaceshipweb.netlify.app/",
    },
    {
      name: "Retro Arcade",
      image:
        "https://raw.githubusercontent.com/shakibkhandev/Retro-Arcade-Static-Site/refs/heads/main/assets/01.png",
      timeline: "Jan 2025 - Feb 2025",
      details:
        "Retro Arcade is a static website built with HTML, CSS, and JavaScript. It features a modern design and provides information about the app.",
      techStacks: ["HTML", "CSS", "JS"],
      url: "https://retroarcadeweb.netlify.app/",
    },
    {
      name: "NexTech",
      image:
        "https://raw.githubusercontent.com/shakibkhandev/NexTech-Static-Site/refs/heads/main/assets/01.png",
      timeline: "Jan 2025 - Feb 2025",
      details:
        "NexTech is a static website built with HTML, CSS, and JavaScript. It features a modern design and provides information about the app.",
      techStacks: ["HTML", "CSS", "JS"],
      url: "https://nextechweb.netlify.app/",
    },
    {
      name: "Gamer Hub",
      image:
        "https://raw.githubusercontent.com/shakibkhandev/GamerHub-Static-Site/refs/heads/main/assets/01.png",
      timeline: "Jan 2025 - Feb 2025",
      details:
        "Gamer Hub is a static website built with HTML, CSS, and JavaScript. It features a modern design and provides information about the app.",
      techStacks: ["HTML", "CSS", "JS"],
      url: "https://gamerhubweb.netlify.app/",
    },
    {
      name: "Fishology",
      image:
        "https://raw.githubusercontent.com/shakibkhandev/Fishology-Static-Site/refs/heads/main/assets/01.png",
      timeline: "Jan 2025 - Feb 2025",
      details:
        "Fishology is a static website built with HTML, CSS, and JavaScript. It features a modern design and provides information about the app.",
      techStacks: ["HTML", "CSS", "JS"],
      url: "https://fishologyweb.netlify.app/",
    },
    {
      name: "Extreose",
      image:
        "https://raw.githubusercontent.com/shakibkhandev/Extreose-Static-Site/refs/heads/main/assets/01.jpg",
      timeline: "February 2025 - March 2025",
      details:
        "Extreose is a static website built with HTML, CSS, and JavaScript. It features a modern design and provides information about the app.",
      techStacks: ["HTML", "CSS", "JS"],
      url: "https://extreoseweb.netlify.app/",
    },
    {
      name: "Crafty",
      image:
        "https://raw.githubusercontent.com/shakibkhandev/Crafty-Static-Site/refs/heads/main/assets/01.png",
      timeline: "February 2025 - March 2025",
      details:
        "Crafty is a static website built with HTML, CSS, and JavaScript. It features a modern design and provides information about the app.",
      techStacks: ["HTML", "CSS", "JS"],
      url: "https://craftyweb3.netlify.app/",
    },
    {
      name: "Cosmic Chronicles",
      image:
        "https://raw.githubusercontent.com/shakibkhandev/Cosmic-Chronicles-Static-Site/refs/heads/main/assets/01.png",
      timeline: "February 2025 - March 2025",
      details:
        "Cosmic Chronicles is a static website built with HTML, CSS, and JavaScript. It features a modern design and provides information about the app.",
      techStacks: ["HTML", "CSS", "JS"],
      url: "https://cosmicchroniclesweb.netlify.app/",
    },
    {
      name: "Boheina",
      image:
        "https://raw.githubusercontent.com/shakibkhandev/Boheina-Static-Site/refs/heads/main/assets/01.png",
      timeline: "February 2025 - March 2025",
      details:
        "Boheina is a static website built with HTML, CSS, and JavaScript. It features a modern design and provides information about the app.",
      techStacks: ["HTML", "CSS", "JS"],
      url: "https://boheina.netlify.app/",
    },
    {
      name: "AutoSpa Elite",
      image:
        "https://raw.githubusercontent.com/shakibkhandev/AutoSpa-Elite-Static-Site/refs/heads/main/assets/01.png",
      timeline: "February 2025 - March 2025",
      details:
        "AutoSpa Elite is a static website built with HTML, CSS, and JavaScript. It features a modern design and provides information about the app.",
      techStacks: ["HTML", "CSS", "JS"],
      url: "https://autospaelite.netlify.app/",
    },
    {
      name: "Adventure Gear",
      image:
        "https://raw.githubusercontent.com/shakibkhandev/Adventure-Gear-Static-Site/refs/heads/main/assets/01.png",
      timeline: "February 2025 - March 2025",
      details:
        "Adventure Gear is a static website built with HTML, CSS, and JavaScript. It features a modern design and provides information about the app.",
      techStacks: ["HTML", "CSS", "JS"],
      url: "https://adventuregear.netlify.app/",
    },
    {
      name: "FioLabs",
      image:
        "https://raw.githubusercontent.com/shakibkhandev/FioLabs-Static-Site/refs/heads/main/assets/01.png",
      timeline: "February 2025 - March 2025",
      details:
        "FioLabs is a static website built with HTML, CSS, and JavaScript. It features a modern design and provides information about the app.",
      techStacks: ["HTML", "CSS", "JS"],
      url: "https://fiolabs.netlify.app/",
    },
    {
      name: "True Fitness",
      image:
        "https://raw.githubusercontent.com/shakibkhandev/TrueFitness-Static-Site/refs/heads/main/assets/01.png",
      timeline: "February 2025 - March 2025",
      details:
        "True Fitness is a static website built with HTML, CSS, and JavaScript. It features a modern design and provides information about the app.",
      techStacks: ["HTML", "CSS", "JS"],
      url: "https://true-fitness.netlify.app/",
    },
    {
      name: "Pet Grooming Store",
      image:
        "https://raw.githubusercontent.com/shakibkhandev/Pet-Grooming-Store-Static-Site/refs/heads/main/assets/01.png",
      timeline: "February 2025 - March 2025",
      details:
        "Pet Grooming Store is a static website built with HTML, CSS, and JavaScript. It features a modern design and provides information about the app.",
      techStacks: ["HTML", "CSS", "JS"],
      url: "https://petgroomingstore.netlify.app/",
    },
  ],
};

export default function Home() {
  const { theme, toggleTheme } = useThemeState();

  // Add smooth scroll function
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className={`min-h-screen w-screen ${Colors[theme].bg}`}>
      <main className={`max-w-4xl mx-auto px-4 py-16`}>
        {/* Section 1 - About Me */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`flex flex-col md:flex-row items-center gap-8`}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`flex-1 text-center md:text-left`}
          >
            <h1
              className={`text-4xl md:text-6xl font-bold mb-4 ${Colors[theme].text}`}
            >
              Hi, I'm {data.name.split(" ")[0]}{" "}
              <span className="animate-wave">👋</span>
            </h1>
            <p className={`text-lg ${Colors[theme].text}`}>{data.profession}</p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`mt-8 flex gap-4 justify-center md:justify-start`}
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300
                ${
                  theme === "dark"
                    ? "bg-white text-gray-900 hover:bg-white/90"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                Get in Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                onClick={(e) => scrollToSection(e, "projects")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300
                ${
                  theme === "dark"
                    ? "bg-transparent text-white border border-white/90 hover:bg-white/5"
                    : "bg-transparent text-gray-900 border border-gray-900 hover:bg-gray-900/5"
                }`}
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`shrink-0`}
          >
            <div
              className={`w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              <Image
                src={data.image}
                alt="Profile Image"
                width={256}
                height={256}
                className={`w-full h-full object-cover transform transition-transform duration-300`}
              />
            </div>
          </motion.div>
        </motion.section>

        {/* Section 2 - About Me */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 transform transition-all duration-500"
        >
          <h2
            className={`text-2xl font-bold mb-4 flex items-center gap-2 ${Colors[theme].text}`}
          >
            About
          </h2>
          <p className={`${Colors[theme].text} p-4 rounded-lg`}>{data.about}</p>
        </motion.section>

        {/* Section 3 - Work Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <motion.div variants={containerVariants} className="text-center mb-8">
            <motion.span
              variants={itemVariants}
              className={`px-4 py-2 rounded-full text-sm font-medium inline-block
                transition-all duration-300 hover:scale-105 cursor-pointer
                ${
                  theme === "dark"
                    ? "bg-gray-800/80 text-gray-200 border border-gray-700 hover:bg-gray-700/80"
                    : "bg-gray-100/80 text-gray-800 border border-gray-200 hover:bg-gray-200/80"
                }`}
            >
              Work Experience
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className={`text-4xl font-bold mt-4 mb-3 transition-colors duration-300
                ${theme === "dark" ? "text-gray-100" : "text-gray-900"}`}
            >
              My professional journey
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className={`text-lg transition-colors duration-300
                ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
            >
              Here's where I've worked and what I've accomplished
            </motion.p>
          </motion.div>

          <div className="space-y-8">
            {data.experience.length > 0 ? (
              data.experience.map((exp: any, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-xl backdrop-blur-sm border ${
                    theme === "dark"
                      ? "border-gray-800 bg-gray-900/50"
                      : "border-gray-200 bg-white/50"
                  } hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className={`text-xl font-bold ${Colors[theme].text}`}>
                        {exp.position}
                      </h3>
                      <p
                        className={`text-lg ${Colors[theme].text} mt-1 opacity-80`}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span
                        className={`text-sm ${Colors[theme].text} opacity-70`}
                      >
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`p-6 rounded-xl backdrop-blur-sm border ${
                  theme === "dark"
                    ? "border-gray-800 bg-gray-900/50"
                    : "border-gray-200 bg-white/50"
                } hover:shadow-lg transition-all duration-300`}
              >
                <div className="text-center py-8">
                  <h3 className={`text-xl font-bold ${Colors[theme].text}`}>
                    No Work Experience Yet
                  </h3>
                  <p className={`mt-2 ${Colors[theme].text} opacity-80`}>
                    I'm currently building my professional experience. Check
                    back soon!
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Section 4 - Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <motion.div variants={containerVariants} className="text-center mb-8">
            <motion.span
              variants={itemVariants}
              className={`px-4 py-2 rounded-full text-sm font-medium inline-block
                transition-all duration-300 hover:scale-105 cursor-pointer
                ${
                  theme === "dark"
                    ? "bg-gray-800/80 text-gray-200 border border-gray-700 hover:bg-gray-700/80"
                    : "bg-gray-100/80 text-gray-800 border border-gray-200 hover:bg-gray-200/80"
                }`}
            >
              Education
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className={`text-4xl font-bold mt-4 mb-3 transition-colors duration-300
                ${theme === "dark" ? "text-gray-100" : "text-gray-900"}`}
            >
              My educational background
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className={`text-lg transition-colors duration-300
                ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
            >
              The institutions that have shaped my knowledge and skills
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {data.education.length > 0 ? (
              data.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-xl backdrop-blur-sm border ${
                    theme === "dark"
                      ? "border-gray-800 bg-gray-900/50"
                      : "border-gray-200 bg-white/50"
                  } hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold ${Colors[theme].text}`}>
                        {edu.degree}
                      </h3>
                      <p
                        className={`text-lg ${Colors[theme].text} mt-1 opacity-80`}
                      >
                        {edu.school}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mt-4">
                      <span
                        className={`text-sm ${Colors[theme].text} opacity-70`}
                      >
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`p-6 rounded-xl backdrop-blur-sm border ${
                  theme === "dark"
                    ? "border-gray-800 bg-gray-900/50"
                    : "border-gray-200 bg-white/50"
                } hover:shadow-lg transition-all duration-300`}
              >
                <div className="text-center py-8">
                  <h3 className={`text-xl font-bold ${Colors[theme].text}`}>
                    No Education Information Yet
                  </h3>
                  <p className={`mt-2 ${Colors[theme].text} opacity-80`}>
                    Education details will be added soon.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Section 5 - Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <motion.div variants={containerVariants} className="text-center mb-8">
            <motion.span
              variants={itemVariants}
              className={`px-4 py-2 rounded-full text-sm font-medium inline-block
                transition-all duration-300 hover:scale-105 cursor-pointer
                ${
                  theme === "dark"
                    ? "bg-gray-800/80 text-gray-200 border border-gray-700 hover:bg-gray-700/80"
                    : "bg-gray-100/80 text-gray-800 border border-gray-200 hover:bg-gray-200/80"
                }`}
            >
              My Skills
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className={`text-4xl font-bold mt-4 mb-3 transition-colors duration-300
                ${theme === "dark" ? "text-gray-100" : "text-gray-900"}`}
            >
              Technologies I work with
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className={`text-lg transition-colors duration-300
                ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
            >
              I've worked with a variety of technologies throughout my career.
            </motion.p>
          </motion.div>
          {data.skills.length > 0 ? (
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {data.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer 
                  transition-all duration-300 
                  ${
                    theme === "dark"
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "bg-gray-900/5 text-gray-900 hover:bg-gray-900/10"
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`p-6 rounded-xl backdrop-blur-sm border ${
                theme === "dark"
                  ? "border-gray-800 bg-gray-900/50"
                  : "border-gray-200 bg-white/50"
              } hover:shadow-lg transition-all duration-300`}
            >
              <div className="text-center py-8">
                <h3 className={`text-xl font-bold ${Colors[theme].text}`}>
                  No Skills Listed Yet
                </h3>
                <p className={`mt-2 ${Colors[theme].text} opacity-80`}>
                  Skills will be added soon.
                </p>
              </div>
            </motion.div>
          )}
        </motion.section>

        {/* Projects Section */}
        <motion.section id="projects" className="mt-24 scroll-mt-16">
          <motion.div variants={containerVariants} className="text-center mb-8">
            <motion.span
              variants={itemVariants}
              className={`px-4 py-2 rounded-full text-sm font-medium inline-block
                transition-all duration-300 hover:scale-105 cursor-pointer
                ${
                  theme === "dark"
                    ? "bg-gray-800/80 text-gray-200 border border-gray-700 hover:bg-gray-700/80"
                    : "bg-gray-100/80 text-gray-800 border border-gray-200 hover:bg-gray-200/80"
                }`}
            >
              My Projects
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className={`text-4xl font-bold mt-4 mb-3 transition-colors duration-300
                ${theme === "dark" ? "text-gray-100" : "text-gray-900"}`}
            >
              Check out my latest work
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className={`text-lg transition-colors duration-300
                ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
            >
              I've worked on a variety of projects, from simple websites to
              complex web applications.
            </motion.p>
          </motion.div>

          {data.projects.length > 0 ? (
            <Swiper
              className="mySwiper"
              rewind={true}
              grabCursor={true}
              autoplay={{ delay: 2000 }}
            >
              {data.projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    variants={cardHoverVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    className={`rounded-lg overflow-hidden border ${
                      theme === "dark" ? "border-gray-800" : "border-gray-200"
                    }`}
                  >
                    {/* Grid Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Image Section */}
                      <div className="relative h-[160px] sm:h-[240px] md:h-full">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="p-4 text-left">
                        <motion.h3
                          variants={itemVariants}
                          className={`text-xl font-bold mb-1 ${
                            theme === "dark" ? "text-gray-100" : "text-gray-900"
                          }`}
                        >
                          {project.name}
                        </motion.h3>
                        <motion.p
                          variants={itemVariants}
                          className="text-xs text-gray-500 dark:text-gray-400 mb-2"
                        >
                          {project.timeline}
                        </motion.p>
                        <motion.p
                          variants={itemVariants}
                          className={`text-sm mb-3 line-clamp-2 ${
                            theme === "dark" ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {project.details}
                        </motion.p>
                        <motion.div
                          variants={itemVariants}
                          className="flex flex-wrap gap-1 mb-3 justify-start"
                        >
                          {project.techStacks.map((tech, index) => (
                            <motion.span
                              key={index}
                              variants={itemVariants}
                              className={`px-2 py-1 rounded-full text-xs ${
                                theme === "dark"
                                  ? "bg-gray-800 text-gray-300 border border-gray-700"
                                  : "bg-gray-100 text-gray-800 border border-gray-200"
                              }`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>
                        <motion.a
                          variants={buttonVariants}
                          initial="initial"
                          whileHover="hover"
                          whileTap="tap"
                          target="_blank"
                          href={project.url}
                          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium 
                            ${
                              theme === "dark"
                                ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                            }`}
                        >
                          <svg
                            className="transition-transform duration-300 group-hover:scale-110"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                          </svg>
                          Website
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`p-6 rounded-xl backdrop-blur-sm border ${
                theme === "dark"
                  ? "border-gray-800 bg-gray-900/50"
                  : "border-gray-200 bg-white/50"
              } hover:shadow-lg transition-all duration-300`}
            >
              <div className="text-center py-8">
                <h3 className={`text-xl font-bold ${Colors[theme].text}`}>
                  No Projects Yet
                </h3>
                <p className={`mt-2 ${Colors[theme].text} opacity-80`}>
                  Projects will be added soon. Stay tuned!
                </p>
              </div>
            </motion.div>
          )}
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="contact"
          className="mt-24 scroll-mt-16 mb-24"
        >
          <div className="text-center mb-8">
            <span
              className={`px-4 py-2 rounded-full text-sm font-medium inline-block
                transition-all duration-300 hover:scale-105 cursor-pointer
                ${
                  theme === "dark"
                    ? "bg-gray-800/80 text-gray-200 border border-gray-700 hover:bg-gray-700/80"
                    : "bg-gray-100/80 text-gray-800 border border-gray-200 hover:bg-gray-200/80"
                }`}
            >
              Get in Touch
            </span>
            <h2
              className={`text-4xl font-bold mt-4 mb-3 ${Colors[theme].text}`}
            >
              Let&apos;s work together
            </h2>
            <p className={`text-lg ${Colors[theme].text}`}>
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <a
              href={`mailto:${data.email}`}
              className={`group p-6 rounded-2xl transition-all duration-300
                ${
                  theme === "dark"
                    ? "bg-gray-800/50 hover:bg-gray-800"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-xl
                    ${
                      theme === "dark"
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-200 text-gray-700"
                    }`}
                >
                  <svg
                    className="transition-transform duration-300 group-hover:scale-110"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold ${Colors[theme].text}`}>
                    Email
                  </h3>
                  <p className={`text-sm ${Colors[theme].text}`}>
                    {data.email}
                  </p>
                </div>
              </div>
            </a>

            <a
              target="_blank"
              href={data.social.x}
              className={`group p-6 rounded-2xl transition-all duration-300
                ${
                  theme === "dark"
                    ? "bg-gray-800/50 hover:bg-gray-800"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-xl
                    ${
                      theme === "dark"
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-200 text-gray-700"
                    }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:scale-110"
                  >
                    <path d="M17 3h4l-7.5 8.5L21 21h-4l-5-6-5 6H3l7.5-9.5L3 3h4l5 6z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold ${Colors[theme].text}`}>
                    Twitter
                  </h3>
                  <p className={`text-sm ${Colors[theme].text}`}>
                    {data.social.x.split("/").pop()}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </motion.section>
      </main>
    </main>
  );
}
