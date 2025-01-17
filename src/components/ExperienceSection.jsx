import React, { useState } from 'react';
import { Briefcase, Calendar, ArrowRight, Building2 } from 'lucide-react';
import { FaPython, FaAws, FaBrain, FaMicrophone, FaCloud, FaDatabase, FaChartLine } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ExperienceSection = () => {
  const { currentTheme } = useTheme();
  const experiences = [
    {
      title: "AI Engineering Internship",
      company: "Resilience, Inc",
      location: "Remote, U.S.A",
      period: "July 2024 – Oct 2024",
      achievements: [
        "Spearheaded the multimodal approach for emotion recognition in speech using audio features and words with neural network and NLP.",
        "Advanced the CNN models by implementing hyperparameter tuning with Bayesian Optimization and transformer encoder network, increasing recognition accuracy by 16%.",
        "Enhanced the preprocessing of audio by conducting validation and normalization techniques, which increased data efficiency by 25%."
      ],
      techStack: ["Neural Networks", "NLP", "CNN", "Audio Processing", "Python"]
    },
    {
      title: "Software Engineering Intern",
      company: "Hawkeye Hotels and Management",
      location: "Remote, U.S.A",
      period: "May 2024 – July 2024",
      achievements: [
        "Implemented generative AI model using Python to automate the creation of multi-paragraph hotel reviews based on customer ratings from over 30 service categories.",
        "Functionalized a cloud-based infrastructure on AWS to handle data processing, ensuring scalability and reliability of the review generation system, improving latency by 48%.",
        "Reduced guest review time from 1-3 minutes to under 30 seconds, boosting the review completion rate by 60%"
      ],
      techStack: ["Python", "AWS", "Generative AI", "Cloud Infrastructure"]
    },
    {
      title: "Student Data Engineer",
      company: "EBCS, GSU",
      location: "Atlanta, Georgia",
      period: "Sept 2023 - May 2024",
      achievements: [
        "Engineered data cleaning and machine learning algorithms to achieve 90% data precision for industry clients through dataset analysis.",
        "Utilized linear regression modeling to accurately forecast outcomes and identify trends within targeted markets, achieved a prediction accuracy of 86%.",
        "Optimized data analytics processes using Python, enhancing research quality by 30% and reducing analysis time by 40%."
      ],
      techStack: ["Python", "Machine Learning", "Data Analysis", "Linear Regression"]
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skillIcons = {
    "Neural Networks": <FaBrain className="w-4 h-4 mr-1" />,
    "NLP": <FaMicrophone className="w-4 h-4 mr-1" />,
    "CNN": <FaBrain className="w-4 h-4 mr-1" />,
    "Audio Processing": <FaMicrophone className="w-4 h-4 mr-1" />,
    "Python": <FaPython className="w-4 h-4 mr-1" />,
    "AWS": <FaAws className="w-4 h-4 mr-1" />,
    "Generative AI": <FaBrain className="w-4 h-4 mr-1" />,
    "Cloud Infrastructure": <FaCloud className="w-4 h-4 mr-1" />,
    "Machine Learning": <FaBrain className="w-4 h-4 mr-1" />,
    "Data Analysis": <FaDatabase className="w-4 h-4 mr-1" />,
    "Linear Regression": <FaChartLine className="w-4 h-4 mr-1" />
  };

  return (
    <section id="experience" className={`py-20 ${currentTheme.background.primary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold ${currentTheme.text.primary} sm:text-4xl`}>Professional Experience</h2>
          <p className={`mt-4 text-lg ${currentTheme.text.secondary}`}>
            My journey through various roles in AI, Software Engineering, and Data Analysis
          </p>
        </div>

        <div className="relative">
          <div className="border-l-2 border-gray-200 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="w-5/12">
                  <div
                    className={`rounded-xl shadow-lg transition-all duration-300 transform ${
                      hoveredIndex === index ? 'scale-[1.02] shadow-xl' : ''
                    } ${currentTheme.background.secondary} p-6 sm:p-8`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                      <div>
                        <h3 className={`text-xl font-bold ${currentTheme.text.primary} flex items-center`}>
                          <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
                          {exp.title}
                        </h3>
                        <div className={`mt-2 flex items-center ${currentTheme.text.secondary}`}>
                          <Building2 className="w-4 h-4 mr-2" />
                          {exp.company}
                          <span className="mx-2">•</span>
                          {exp.location}
                        </div>
                      </div>
                      <div className={`mt-2 sm:mt-0 flex items-center ${currentTheme.text.secondary}`}>
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="whitespace-nowrap">{exp.period}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className={`flex items-start ${currentTheme.text.secondary}`}>
                          <ArrowRight className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                          <p>{achievement}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`flex items-center px-3 py-1 ${currentTheme.background.accent} ${currentTheme.text.accent} rounded-full text-sm`}
                        >
                          {skillIcons[tech]}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-5 h-5 bg-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;