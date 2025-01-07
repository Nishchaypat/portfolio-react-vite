import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Phone, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ContactSection = () => {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Here you would typically handle the form submission
    // For now, we'll just simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className={`py-20 ${currentTheme.background.primary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold ${currentTheme.text.primary} sm:text-4xl`}>Contact Me</h2>
          <p className={`mt-4 text-lg ${currentTheme.text.secondary}`}>
            Feel free to reach out to me via email or through my social media profiles
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <form onSubmit={handleSubmit} className={`rounded-lg shadow-sm p-6 ${currentTheme.background.secondary}`}>
              <div className="mb-4">
                <label htmlFor="name" className={`block text-sm font-medium ${currentTheme.text.primary}`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${currentTheme.border.primary} ${currentTheme.background.primary} ${currentTheme.text.primary} focus:ring-blue-500 focus:border-blue-500`}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className={`block text-sm font-medium ${currentTheme.text.primary}`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${currentTheme.border.primary} ${currentTheme.background.primary} ${currentTheme.text.primary} focus:ring-blue-500 focus:border-blue-500`}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className={`block text-sm font-medium ${currentTheme.text.primary}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${currentTheme.border.primary} ${currentTheme.background.primary} ${currentTheme.text.primary} focus:ring-blue-500 focus:border-blue-500`}
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${currentTheme.background.accent} hover:${currentTheme.background.accentHover} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-blue-600 mr-4" />
              <span className={currentTheme.text.primary}>+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-blue-600 mr-4" />
              <span className={currentTheme.text.primary}>email@example.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-blue-600 mr-4" />
              <span className={currentTheme.text.primary}>123 Main St, Anytown, USA</span>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com" className={`${currentTheme.text.secondary} hover:${currentTheme.text.accent} transition-colors`}>
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className={`${currentTheme.text.secondary} hover:${currentTheme.text.accent} transition-colors`}>
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;