import React, { useState } from "react";
import {
  Sun,
  Moon,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  FileText,
} from "lucide-react";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Resume } from "./components/Resume";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
        {/* Navigation */}
        <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <span className="text-xl custom-text font-bold text-gray-900 dark:text-white">
                Ashrick Arefin
              </span>

              <div className="flex items-center space-x-4">
                <a
                  href="#about"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Projects
                </a>
                <a
                  href="#resume"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Contact
                </a>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 lg:pr-16">
                <img
                  src="/images/portrait/ohi_portrait.png"
                  alt="Portrait Image"
                  className="w-auto max-w-[300px] sm:max-w-[350px] md:max-w-[400px] rounded-xl mx-auto mb-8"
                />

                <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Junior Software Engineer
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Specializing in HTML, CSS, JavaScript, and WordPress
                  development
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#contact"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get in touch
                  </a>
                  <a
                    href="#resume"
                    className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors inline-flex items-center"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    View Resume
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2 mt-12 lg:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
                  alt="Ashrick Arefin"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            <div className="flex justify-center mt-16">
              <a
                href="#about"
                className="animate-bounce p-2 bg-gray-100 dark:bg-gray-800 rounded-full"
              >
                <ChevronDown className="text-gray-600 dark:text-gray-300" />
              </a>
            </div>
          </div>
        </section>

        <About />
        <Projects />
        <Resume />
        <Contact />

        {/* Footer */}
        <footer className="bg-gray-100 dark:bg-gray-800 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center">
              <p className="text-gray-600 dark:text-gray-300">
                © 2025 Ashrick Arefin. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
