
import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const isMobile = useIsMobile();
  
  return (
    <section id="about" className="bg-muted/30 dark:bg-muted/10 py-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className={`${isMobile ? 'w-3/4' : 'lg:w-1/3'}`}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-primary/10 -z-10"></div>
              <img 
                src="/Content/images/3.jpg" 
                alt="Tomás Taborda" 
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground mb-8">
              I'm a student pursuing a Master's Degree in Computer Science and Engineering at Instituto Superior Técnico. 
              I have experience with many programming languages such as Python, C, Java, JavaScript, Assembly, PostgreSQL, HTML and CSS. 
              I want to learn, to be better and to help who needs. I consider myself to be charismatic and curious and I try to do everything 
              in my power to do any jobs at hand. I'm persistent, resilient and I always want to be the best version of myself. 
              Like everyone else, I have flaws, but I strive to be better everyday and to be a better person as well. 
              I'm currently seeking for a Summer Internship for self improvement and discovery, if you know any suitable opportunity, feel free to contact me.
            </p>
            
            <div className="flex space-x-8 mb-6 border-b border-primary/20 overflow-x-auto pb-2 scrollbar-hide">
              <button 
                className={`pb-2 relative transition-colors duration-300 whitespace-nowrap ${activeTab === 'skills' ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                onClick={() => setActiveTab('skills')}
              >
                Skills
                {activeTab === 'skills' && <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>}
              </button>
              <button 
                className={`pb-2 relative transition-colors duration-300 whitespace-nowrap ${activeTab === 'experience' ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                onClick={() => setActiveTab('experience')}
              >
                Experience
                {activeTab === 'experience' && <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>}
              </button>
              <button 
                className={`pb-2 relative transition-colors duration-300 whitespace-nowrap ${activeTab === 'education' ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                onClick={() => setActiveTab('education')}
              >
                Education
                {activeTab === 'education' && <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>}
              </button>
            </div>
            
            <div className="space-y-4">
              {activeTab === 'skills' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
                  {[
                    { name: 'Python', desc: 'My First Programming Language and developed a Game' },
                    { name: 'C', desc: 'Algorithms and Data Structures' },
                    { name: 'Assembly', desc: 'Developed a Game' },
                    { name: 'Java', desc: 'Object Oriented Programming' },
                    { name: 'SQL', desc: 'Developed a Web App with a PostgreSQL database' },
                    { name: 'Latex and Markdown', desc: 'For document writing purposes' },
                    { name: 'HTML and CSS', desc: 'Frontend development' },
                    { name: 'JavaScript', desc: 'Developed an App with p5js framework' }
                  ].map((skill, index) => (
                    <div 
                      key={index} 
                      className="p-4 rounded-lg bg-background/50 hover:bg-background/80 border border-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-md"
                    >
                      <span className="text-primary font-medium block">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.desc}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'experience' && (
                <div className="space-y-4 animate-fade-in">
                  {[
                    { title: 'Volunteering Experience 2022 - Current', desc: 'First year Mentor at Instituto Superior Tecnico\'s Mentoring Program' },
                    { title: 'Student Organization Experience 2023-2025', desc: 'I was a member of NEETI, a Student Organization made by Telecomunications and Informatics Engineering students, in the logistics department working with an amazing team. My job was to schedule and organize events while cooperating with the other departments.' },
                    { title: 'Professional Experience', desc: 'TO DO' },
                  ].map((exp, index) => (
                    <div 
                      key={index} 
                      className="p-4 rounded-lg bg-background/50 hover:bg-background/80 border border-primary/10 transition-all duration-300 hover:translate-x-2"
                    >
                      <span className="text-primary font-medium block">{exp.title}</span>
                      <span className="text-sm text-muted-foreground">{exp.desc}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'education' && (
                <div className="space-y-4 animate-fade-in">
                  {[
                    { period: '2018 - 2021', desc: 'Highschool Degree in Science and Technologies at Escola Secundária de Mem Martins' },
                    { period: '2021 - 2024', desc: 'Finished a Bachelor\'s degree in Telecomunications and Informatics Engineering at Instituto Superior Técnico' },
                    { period: '2024 - Current', desc: 'Pursuing a Master\'s degree in Computer Science and Engineering at Instituto Superior Técnico' },
                  ].map((edu, index) => (
                    <div 
                      key={index} 
                      className="p-4 rounded-lg bg-background/50 hover:bg-background/80 border border-primary/10 transition-all duration-300 hover:-translate-y-1"
                    >
                      <span className="text-primary font-medium block">{edu.period}</span>
                      <span className="text-sm text-muted-foreground">{edu.desc}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
