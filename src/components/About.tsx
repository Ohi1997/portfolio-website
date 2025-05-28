import React from "react";
import { Code, Database, Globe, icons } from "lucide-react";

export function About() {
  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      description:
        "Skilled in HTML, CSS, and JavaScript with experience using modern frameworks to build responsive UIs.",
    },
    {
      // icon: <Database className="w-6 h-6" />,
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/09/Wordpress-Logo.svg"
          alt="WordPress"
          className="w-6 h-6 fill-cyan-300"
        />
      ),
      title: "WordPress Development",
      description:
        "Focused on custom plugin development and theme customization to create powerful, scalable solutions.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Performance",
      description:
        "Expertise in optimizing websites for speed, accessibility, and SEO best practices.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a Junior Software Engineer with a passion for crafting
            efficient, user-focused web solutions. My specialty lies in
            developing custom WordPress plugins that extend functionality and
            solve real-world problems. With a solid foundation in PHP,
            JavaScript, HTML, and CSS, I build tools that empower websites to do
            more — whether it's enhancing user experience, streamlining
            workflows, or adding advanced features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:translate-y-1 transition-transform duration-200"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <div className="text-blue-600 dark:text-blue-300">
                  {skill.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
        {/* Experience Section */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Experience
          </h3>
          <div className="space-y-8">
            {/* ASTGD */}
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Junior Software Engineer
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                <a
                  href="https://astgd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  ASTGD
                </a>{" "}
                • September 2023 – Present
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Developing custom WordPress plugins and themes tailored to
                client needs. Responsibilities include enhancing site
                performance, integrating third-party APIs, and maintaining code
                quality in a fast-paced development environment.
              </p>
            </div>

            {/* Maxgen Technologies */}
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Web Development Intern
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                <a
                  href="https://maxgentechnologies.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Maxgen Technologies Pvt Ltd
                </a>{" "}
                • February 2023 – May 2023
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Assisted in frontend development and WordPress customization
                tasks. Gained hands-on experience working in a collaborative
                team environment, applying best practices in web design and
                development.
              </p>
            </div>

            {/* Tatvasoft */}
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Summer Intern
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                <a
                  href="https://www.tatvasoft.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Tatvasoft
                </a>{" "}
                • June 2022 – July 2022
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Completed a short-term internship focused on the fundamentals of
                software development, laying the groundwork for future learning
                in full-stack technologies.
              </p>
            </div>
          </div>
        </div>
        {/* Education section  */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Education
          </h3>
          <div className="space-y-8">
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Bachelor of Engineering in Computer Engineering
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                <a
                  href="https://www.gtu.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Gujarat Technological University
                </a>{" "}
                • 2018 - 2023
              </p>
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Higher Secondary Certificate
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                <a
                  href="https://ngdc.ac.bd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  New Govt. Degree College, Rajshahi
                </a>{" "}
                • 2014 - 2016
              </p>
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Secondary School Certificate
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                <a
                  href="https://rcs.edu.bd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Rajshahi Collegiate School
                </a>{" "}
                • 2006 - 2014
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
