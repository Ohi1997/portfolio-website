import React from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "All in One Pricing Table",
      description:
        "Ten amazing pricing tables that are easy to use and look great on any device. Fully responsive and customizable.",
      image: "https://shorturl.at/1Ey3g",
      technologies: ["HTML", "JavaScript", "CSS", "JSON"],
      liveUrl: "https://codecanyon.net/item/all-in-one-pricing-tables/51706584",
    },
    {
      title: "Performance Optimization",
      description:
        "Website optimization project that improved loading times by 70% through various optimization techniques.",
      image: "https://firevps.net/wp-content/uploads/2024/04/font-page.png",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "WordPress",
        "PHP",
        "Performance",
      ],
      liveUrl: "https://firevps.net/",
    },
    {
      title: "Result Management System for Institutions",
      description:
        "A WordPress plugin built to streamline result management for schools and colleges. Features include detailed student marksheets, CSV-based student data import, and customizable layouts tailored to institutional needs. Now live on the official WordPress plugin repository.",
      image:
        "https://ps.w.org/result-management-system-for-institutions/assets/screenshot-1.png",
      technologies: ["WordPress", "PHP", "CSV", "Custom Plugin", "Education"],
      liveUrl:
        "https://wordpress.org/plugins/result-management-system-for-institutions/",
    },
  ];
  const upcomingProjects = [
    {
      title: "Arefino",
      description:
        "Arefino is a sleek and modern WordPress portfolio theme designed for online content creators, freelancers, and professionals. It offers a highly customizable layout, fast performance, and seamless integration with popular page builders to showcase work effectively.",
      image:
        "https://raw.githubusercontent.com/Ohi1997/portfolio-website/refs/heads/main/public/images/arefino-cover-image.jpg",
      technologies: [
        "WordPress",
        "PHP",
        "JavaScript",
        "CSS",
        "SEO Optimization",
        "Page Builders Compatibility",
      ],
    },
    {
      title: "Ashfin Site Lock",
      description:
        "A lightweight and effective WordPress plugin that enables maintenance mode with a customizable landing page. While regular visitors see a stylish 'Under Maintenance' message, administrators can continue accessing the full site. Ideal for developers and site owners preparing updates or working on live sites.",
      image:
        "https://raw.githubusercontent.com/Ohi1997/portfolio-website/refs/heads/main/public/images/maintenance-preview.jpg",
      technologies: [
        "WordPress",
        "PHP",
        "JavaScript",
        "CSS",
        "Maintenance Mode",
        "Access Control",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Projects */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-16">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {(project.liveUrl || project.githubUrl) && (
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        <Github size={16} className="mr-1" />
                        Source Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Projects */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mt-10 mb-8">
          Upcoming Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-36 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {project.title}
                </h3>
                <span className="inline-block bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Coming Soon
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
