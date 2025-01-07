import React from 'react';
import { Book, Award, Code, Settings } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const AboutSection = () => {
  const { currentTheme } = useTheme();
  const skills = {
    languages: ['Python', 'JavaScript', 'HTML', 'CSS', 'Java', 'SQL', 'NoSQL', 'C'],
    frameworks: ['Django', 'React', 'Node.js', 'Git', 'Flask', 'Lang-chain', 'Scrum (Agile)', 'ETL', 'Apache Spark', 'BERT'],
    tools: ['AWS', 'REST API', 'Google Cloud Services', 'TensorFlow', 'PyTorch', 'Generative AI', 'NLP', 'LLM', 'Audio Processing', 'Librosa', 'Docker', 'IBM Watson', 'Langflow']
  };

  const certifications = [
    'Amazon Web Services Specialization',
    'Databricks Engineering',
    'NASA ATX',
    'CodePath'
  ];

  return (
    <section id="about" className={`py-20 ${currentTheme.background.primary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={`text-3xl font-bold ${currentTheme.text.primary} sm:text-4xl`}>About Me</h2>
          <p className={`mt-4 text-lg ${currentTheme.text.secondary}`}>
            Passionate AI Software Engineer and Full Stack Developer with a focus on building innovative solutions
          </p>
        </div>

        {/* Education Card */}
        <div className={`mt-12 ${currentTheme.background.secondary} rounded-xl p-6 shadow-sm`}>
          <div className="flex items-center mb-4">
            <Book className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className={`text-xl font-semibold ${currentTheme.text.primary}`}>Education</h3>
          </div>
          <div className="ml-8">
            <h4 className={`font-medium ${currentTheme.text.primary}`}>Georgia State University - Atlanta, GA</h4>
            <p className={currentTheme.text.secondary}>Bachelor of Science in Computer Science</p>
            <p className={currentTheme.text.secondary}>Certification in Data Science</p>
            <div className="flex items-center mt-2">
              <span className="text-blue-600 font-semibold">GPA: 3.90</span>
              <span className="mx-2">•</span>
              <span className={currentTheme.text.secondary}>Graduation: May 2025</span>
            </div>
            <p className={`mt-2 ${currentTheme.text.secondary}`}>
              <span className="font-medium">Relevant Coursework:</span> Software Engineering, Machine Learning, Database Systems, Deep Learning
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Languages */}
          <div className={`rounded-xl p-6 shadow-sm ${currentTheme.background.secondary}`}>
            <div className="flex items-center mb-4">
              <Code className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className={`text-xl font-semibold ${currentTheme.text.primary}`}>Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1 ${currentTheme.background.accent} ${currentTheme.text.accent} rounded-full text-sm`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className={`rounded-xl p-6 shadow-sm ${currentTheme.background.secondary}`}>
            <div className="flex items-center mb-4">
              <Settings className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className={`text-xl font-semibold ${currentTheme.text.primary}`}>Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1 ${currentTheme.background.accent} ${currentTheme.text.accent} rounded-full text-sm`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className={`rounded-xl p-6 shadow-sm ${currentTheme.background.secondary}`}>
            <div className="flex items-center mb-4">
              <Settings className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className={`text-xl font-semibold ${currentTheme.text.primary}`}>Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1 ${currentTheme.background.accent} ${currentTheme.text.accent} rounded-full text-sm`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className={`mt-12 ${currentTheme.background.secondary} rounded-xl p-6 shadow-sm`}>
          <div className="flex items-center mb-4">
            <Award className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className={`text-xl font-semibold ${currentTheme.text.primary}`}>Certifications</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className={`p-4 rounded-lg shadow-sm border ${currentTheme.border.primary}`}
              >
                <p className={`text-center ${currentTheme.text.secondary}`}>{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;