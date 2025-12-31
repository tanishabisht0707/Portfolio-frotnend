import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-3xl bg-card border border-white/5 hover:border-primary/50 transition-colors duration-500"
    >
      <div className="aspect-video w-full overflow-hidden bg-muted relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 z-10" />
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 z-20 flex gap-2">
           <div className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/20 backdrop-blur-md">
             {project.category}
           </div>
        </div>
      </div>
      
      <div className="p-6 md:p-8 relative z-20 -mt-12">
        <h3 className="text-2xl font-bold font-display mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground line-clamp-2 mb-6 h-12">
          {project.shortDescription}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs text-muted-foreground/80 bg-secondary/50 px-2 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
          
          <Link href={`/project/${project.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
            View Details <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
