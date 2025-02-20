import React from 'react';
import { FileText, Download } from 'lucide-react';

export function Resume() {
  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Resume</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Download my resume to learn more about my experience and skills
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
            <FileText className="w-16 h-16 mx-auto mb-6 text-blue-600 dark:text-blue-400" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ashrick Arefin - CV
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Complete overview of my skills, experience, and education
            </p>
            <a
              href="/src/docs/arefin_cv.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}