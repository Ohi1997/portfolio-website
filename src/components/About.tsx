import React from 'react';
import { Code, Database, Globe, icons } from 'lucide-react';

export function About() {
  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Frontend Development',
      description: 'Experience with HTML, CSS, JavaScript, and modern frameworks',
    },
    {
      // icon: <Database className="w-6 h-6" />,
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Wordpress-Logo.svg" alt="WordPress" className="w-6 h-6 fill-cyan-300" />,
      title: 'WordPress Development',
      description: 'Custom theme development and plugin integration',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Web Performance',
      description: 'Optimization techniques for faster loading websites',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a Junior Software Engineer passionate about creating efficient and user-friendly web solutions.
            With a focus on WordPress development and frontend technologies, I help businesses establish their online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <div className="text-blue-600 dark:text-blue-300">{skill.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
        {/* Experience Section */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Experience</h3>
          <div className="space-y-8">
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Junior Software Engineer</h4>
              <p className="text-gray-600 dark:text-gray-300">ASTGD • (1 September 2023 - Current)</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Developing custom WordPress themes and implementing performance optimizations for client websites.
              </p>
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Web Development Intern</h4>
              <p className="text-gray-600 dark:text-gray-300">Maxgen Technologies Pvt Ltd • (13 February, 2023 - 11 May, 2023)</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Gained foundational experience in software development,
                contributing to web design projects and learning best practices
                 in a professional environment
              </p>
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Summer Internship</h4>
              <p className="text-gray-600 dark:text-gray-300">Tatvasoft • (20 June, 2022 - 8 July 2022)</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
              Learnt fundamental basics and gained foundational experience in
              software development.
              </p>
            </div>
          </div>
        </div>
        {/* Education section  */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h3>
          <div className="space-y-8">
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor of Engineering in Computer Engineering</h4>
              <p className="text-gray-600 dark:text-gray-300">Gujarat Technological University • 2018 - 2023</p>
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Higher Secondary Certificate</h4>
              <p className="text-gray-600 dark:text-gray-300">New Govt. Degree College, Rajshahi • 2014 - 2016</p>
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Secondary School Certificate</h4>
              <p className="text-gray-600 dark:text-gray-300">Rajshahi Collegiate School • 2006 - 2014</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}