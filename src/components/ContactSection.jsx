import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import styled, { keyframes } from 'styled-components';

const flip = keyframes`
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(180deg);
  }
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background-color: #fff;
  color: #374151;
  text-decoration: none;
  transition: transform 0.6s, box-shadow 0.6s;
  transform-style: preserve-3d;
  perspective: 1000px;

  &:hover {
    background-color: #f9fafb;
    transform: rotateY(180deg);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`;

const ContactSection = () => {
  return (
    <section id="contact" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="pt-16 pb-12">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-500 sm:text-4xl">
                Get in touch
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Let's connect and explore opportunities together
              </p>
              <div className="mt-8 flex justify-center space-x-4">
                <Button href="https://github.com/nishchay-pat">
                  <Github />
                  <span>GitHub</span>
                </Button>
                <Button href="https://linkedin.com/in/nishchay-pat">
                  <Linkedin />
                  <span>LinkedIn</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;