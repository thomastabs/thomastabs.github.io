
import React, { useState } from 'react';
import ProjectCard from '@/components/UI/ProjectCard';
import { Button } from '@/components/ui/button';

const projectCategories = ['All', 'Python', 'Java', 'C', 'SQL', 'JavaScript', 'Figma'];

const projects = [
  {
    id: 1,
    title: 'Game developed in Pygame',
    description: 'This is a pong game that has its twists such as levels and an economy system.',
    image: '/Content/images/pygame.jpeg',
    tags: ['Python', 'Pygame'],
    category: 'Python',
    repoUrl: 'https://github.com/thomastabs/Pong-The-Game',
  },
  {
    id: 2,
    title: 'Clients and Terminals Project',
    description: 'This is a Java Project that emulates the behaviour of a Terminals and Clients system.',
    image: '/Content/images/javaPo.png',
    tags: ['Java', 'OOP'],
    category: 'Java',
    repoUrl: 'https://github.com/thomastabs/OS_Project',
  },
  {
    id: 3,
    title: 'Airport System in C',
    description: 'This is a C Project that emulates the behaviour of an Airport system.',
    image: '/Content/images/c.jpeg',
    tags: ['C', 'Data Structures'],
    category: 'C',
    repoUrl: 'https://github.com/thomastabs/C_ProjectIAED',
  },
  {
    id: 4,
    title: 'Orders Web App',
    description: 'This is a PostgreSQL Web App that emulates an Orders type App.',
    image: '/Content/images/webappsql.png',
    tags: ['SQL', 'PostgreSQL', 'Web'],
    category: 'SQL',
    repoUrl: 'https://github.com/thomastabs/SQL-Database',
  },
  {
    id: 5,
    title: 'P5js App',
    description: 'This is a JavaScript App made with p5js that tests the reaction time.',
    image: '/Content/images/p5js.png',
    tags: ['JavaScript', 'p5js', 'Web'],
    category: 'JavaScript',
    repoUrl: 'https://github.com/thomastabs/P5JSFrameworkBallsApp',
  },
  {
    id: 6,
    title: 'Figma TimeBank App',
    description: 'This is a concept of a Time Bank App created in Figma.',
    image: '/Content/images/figmaa.png',
    tags: ['Figma', 'UI/UX'],
    category: 'Figma',
    repoUrl: 'https://github.com/thomastabs/FigmaTimeBankConceptApp',
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each one demonstrates different skills and technologies I've worked with.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {projectCategories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <a href="https://github.com/thomastabs" target="_blank" rel="noopener noreferrer">
              See more on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
