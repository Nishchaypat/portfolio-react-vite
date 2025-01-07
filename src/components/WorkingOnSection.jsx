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
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Section = styled.section`
  padding: 5rem 0;
  background-color: ${(props) => props.theme.background.primary};
  animation: ${fadeIn} 1s ease-in-out;
`;

const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 800;
  text-align: center;
  color: ${(props) => props.theme.text.primary};
  margin-bottom: 2rem;
  animation: ${fadeIn} 1.2s ease-in-out;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 2rem;
  margin: 0;
  color: ${(props) => props.theme.text.secondary};
`;

const ListItem = styled.li`
  font-size: 1.125rem;
  margin-bottom: 1rem;
  opacity: 0;
  animation: ${fadeInItem} 1s ease-in-out forwards;
  animation-delay: ${(props) => props.delay || '0s'};  /* Delay for staggered animation */
`;

const IconWrapper = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const WorkingOnSection = () => {
  const { currentTheme } = useTheme();

  const technologies = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Langchain', icon: <SiLangchain /> },
    { name: 'DataStax', icon: <SiDatastax /> },
    { name: 'Machine Learning', icon: <SiTensorflow /> },
  ];

  return (
    <Section theme={currentTheme}>
      <Container>
        <Title theme={currentTheme}>Currently Working On</Title>
        <List>
          <ListItem theme={currentTheme} delay="0.2s">"Athlyze" - An Advanced Agentic RAG for gym and athletic building.</ListItem>
          <ListItem theme={currentTheme} delay="0.4s">Using machine learning for biological predictions.</ListItem>
          <ListItem theme={currentTheme} delay="0.6s">Storing research-backed information in a vectorized database.</ListItem>
          <ListItem theme={currentTheme} delay="0.8s">Scheduling tasks based on user limitations and notes.</ListItem>
        </List>

        <Title theme={currentTheme}>Technologies I am using</Title>
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
