
import React from 'react';

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'C', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'JavaScript', level: 70 },
      { name: 'Assembly', level: 65 },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML & CSS', level: 75 },
      { name: 'JavaScript', level: 70 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'React', level: 60 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 80 },
      { name: 'Latex/Markdown', level: 85 },
      { name: 'Figma', level: 70 },
      { name: 'Linux', level: 75 },
    ],
  },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm font-medium text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div 
          className="bg-primary h-2 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've worked with a variety of technologies and programming languages.
            Here's an overview of my technical skills and proficiency levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-lg shadow-sm border"
            >
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex} 
                    name={skill.name} 
                    level={skill.level} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
