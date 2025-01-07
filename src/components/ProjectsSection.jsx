import React, { useState } from 'react';
import { Github, ExternalLink, Tag, Code2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ProjectCard = ({ project, isHovered, onHover, onLeave }) => {
  const { currentTheme } = useTheme();

  return (
    <div
      className={`rounded-xl shadow-sm overflow-hidden transition-all duration-300 transform ${
        isHovered ? 'scale-[1.02] shadow-md' : ''
      } ${currentTheme.background.secondary}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className={`text-xl font-bold ${currentTheme.text.primary}`}>{project.title}</h3>
          <div className="flex space-x-3">
            {project.github && (
              <a href={project.github} className={`${currentTheme.text.secondary} hover:${currentTheme.text.accent} transition-colors`}>
                <Github size={20} />
              </a>
            )}
            {project.live && (
              <a href={project.live} className={`${currentTheme.text.secondary} hover:${currentTheme.text.accent} transition-colors`}>
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <p className={`mt-3 ${currentTheme.text.secondary}`}>{project.description}</p>

        {/* Key Features */}
        <div className="mt-4 space-y-2">
          {project.features.map((feature, idx) => (
            <div key={idx} className="flex items-start">
              <Code2 className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
              <p className={`${currentTheme.text.secondary} text-sm`}>{feature}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center px-3 py-1 ${currentTheme.background.accent} ${currentTheme.text.accent} rounded-full text-sm`}
              >
                <Tag className="w-3 h-3 mr-1" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { currentTheme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Career Wide",
      description: "AI-driven platform connecting students with recruiters, featuring automated recruitment processes and resume insights.",
      features: [
        "Platform spotlights students to recruiters by simplifying the recruitment process",
        "Provides resume insights and improvement suggestions with relevant data",
        "Enhanced candidate chances by 28% through AI-powered optimization",
        "Streamlines candidate search with advanced filters and AI chatbot"
      ],
      technologies: ["Python", "Django", "AWS", "Google Cloud", "Gemini AI", "React"],
      github: "#",
      live: "#"
    },
    {
      title: "Stock Track",
      description: "Advanced stock prediction application using machine learning models for accurate price forecasting.",
      features: [
        "Implements LSTM, CNN, and Sentiment Analysis for stock price prediction",
        "Achieves 82% prediction accuracy using historical data",
        "Features user profile creation and personalized stock interests",
        "Delivers tailored stock forecasts for enhanced user experience"
      ],
      technologies: ["Python", "TensorFlow", "MySQL", "React", "AWS RDS"],
      github: "#",
      live: "#"
    },
    {
      title: "Tweet Sentiment Analysis",
      description: "Semantic search platform leveraging OpenAI's text embedding model for precise sentiment analysis.",
      features: [
        "Utilizes cosine similarity for accurate sentiment matching",
        "Eliminates need for manual alternative searching",
        "Achieves 87% accuracy in sentiment classification",
        "Provides instant sentiment analysis results"
      ],
      technologies: ["Python", "BERT", "LSTM", "TensorFlow", "Glove"],
      github: "#",
      live: "#"
    },
    {
      title: "Law Chat Bot",
      description: "Intelligent chatbot designed for efficient legal text search and query processing.",
      features: [
        "Engineered with Cosine Similarity and Llama 3.0",
        "Achieves 87% accuracy in query responses",
        "Structured law database with metadata for each clause",
        "Reduced query processing time by 10%"
      ],
      technologies: ["Python", "Llama", "SQL", "Qdrant", "LLM"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className={`py-20 ${currentTheme.background.primary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold ${currentTheme.text.primary} sm:text-4xl`}>Featured Projects</h2>
          <p className={`mt-4 text-lg ${currentTheme.text.secondary}`}>
            A collection of my most impactful technical projects
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;