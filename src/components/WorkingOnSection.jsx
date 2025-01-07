import React from 'react';
import { useTheme } from '../context/ThemeContext';
import styled, { keyframes } from 'styled-components';
import { FaPython, FaReact } from "react-icons/fa";
import { SiLangchain, SiDatastax, SiTensorflow } from "react-icons/si";

// Fade-in animation for Section
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Staggered fade-in for list items
const fadeInItem = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.section`
  animation: ${fadeIn} 1s ease-out;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.text.primary};
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  flex: 1 1 30%;
  margin: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text.primary};
  border-radius: 8px;
  display: flex;
  align-items: center;
  animation: ${fadeInItem} 0.5s ease-out ${({ delay }) => delay} forwards;
  opacity: 0;
`;

const IconWrapper = styled.div`
  margin-right: 1rem;
  font-size: 2rem;
`;

const WorkingOnSection = () => {
  const { currentTheme } = useTheme();
  const technologies = [
    { name: 'React', icon: <FaReact /> },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Langchain', icon: <SiLangchain /> },
    { name: 'Datastax', icon: <SiDatastax /> },
    { name: 'TensorFlow', icon: <SiTensorflow /> },
    // Add more technologies as needed
  ];

  return (
    <Section>
      <Container>
        <Title theme={currentTheme} className={currentTheme.text.primary}>Technologies I am using</Title>
        <List>
          {technologies.map((tech, index) => (
            <ListItem key={index} theme={currentTheme} delay={`${1 + index * 0.2}s`}>
              <IconWrapper>{tech.icon}</IconWrapper>
              {tech.name}
            </ListItem>
          ))}
        </List>
      </Container>
    </Section>
  );
};

export default WorkingOnSection;