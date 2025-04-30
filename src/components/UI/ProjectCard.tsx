
import React from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  demoUrl,
  repoUrl,
  className,
}: ProjectCardProps) => {
  return (
    <div className={cn(
      "group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md dark:border-gray-700", 
      className
    )}>
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        
        <div className="flex items-center gap-3">
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Live Demo <ExternalLink className="ml-1 h-3.5 w-3.5" />
            </a>
          )}
          
          {repoUrl && (
            <a 
              href={repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
            >
              Code <Github className="ml-1 h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
