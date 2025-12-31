import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProjectCard } from "../components/ProjectCard";
// import { useProjects } from "@/hooks/use-projects";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Database,
  Layout,
  Server,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
const projects = [
  {
    id: 1,
    title: "Devray Website",
    shortDescription:
      "Modern website with performance optimization and clean UI.",
    imageUrl: "/devray.png",
    category: "Website",
    tags: ["React", "Tailwind", "Nodejs", "Mail"],
  },
  {
    id: 2,
    title: "Document Management System",
    shortDescription:
      "Secure DMS with role management, file preview and permissions.",
    imageUrl: "/dms_dashboard.png",
    category: "Company Project",
    tags: ["React", " Rest API", "Tailwind"],
  },
  {
    id: 3,
    title: "Learning Management System",
    shortDescription:
      "Multi-tenant LMS with dashboards, courses, and analytics.",
    imageUrl: "/lms_dashobard.png",
    category: "Company Project",
    tags: ["React", " Rest API", "Tailwind"],
  },

  {
    id: 4,
    title: "HRMS",
    shortDescription:
      "Human Resource Management System with employee tracking and payroll.",
    imageUrl: "/hrms.png",
    category: "Company Project",
    tags: ["HTML", "CSS", "Talilwind Css"],
  },
  {
    id: 5,
    title: "Maple Cloud Company Website",
    shortDescription:
      "Website for Maple Cloud with responsive design and branding.",
    imageUrl: "/maple_web.png",
    category: "Website",
    tags: ["React", "Tailwind", "UI", "Nodejs", "SQL"],
  },
];

export default function Home() {
  // const { data: projects, isLoading } = useProjects();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pb-20 pt-40 md:pb-32 px-4">
        {/* Background Elements */}
        <div className="absolute top-20 right-0 -z-10 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[128px] opacity-30" />
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Frontend Developer</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight tracking-tight mb-6">
              I craft digital experiences that are
              <span className="text-gradient"> visually stunning</span> &
              functional.
            </h1>

            <p className="md:text-xl text-md text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Hi, I'm{" "}
              <span className="text-foreground tex-sm md:text-md font-semibold">
                Tanisha Bisht
              </span>
              . I'm a Software Developer who builds scalable web applications
              and modern, user-friendly websites. With 2+ years of experience in
              frontend development, I specialize in turning complex ideas into
              clean, high-performing digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 active:scale-100 shadow-lg shadow-primary/25"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all border border-white/5"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-bold font-display mb-4">
                Skills
              </h2>
              <p className="text-muted-foreground">
                The tools and technologies I use to bring ideas to life.
              </p>
            </div>

            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: Layout,
                  title: "Frontend",
                  skills: "React, Tailwind, Javascript,Redux , Rest Apis",
                },
                {
                  icon: Server,
                  title: "Backend",
                  skills: "Node.js, Express, Mongodb",
                },
                {
                  icon: Database,
                  title: "Tools",
                  skills: "Git, Postman , Swagger",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-background border border-white/5 hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.skills}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section id="projects" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                 Projects
              </h2>
              <p className="text-muted-foreground max-w-xl">
                A collection of projects that demonstrate my passion for
                building robust applications.
              </p>
            </div>
           
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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

                  <div className="absolute top-4 right-4 z-20">
                    <div className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/20 backdrop-blur-md">
                      {project.category}
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 relative z-20 -mt-12">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground line-clamp-2 mb-6 h-12">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-col gap-3">
                    <div className="flex gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] text-muted-foreground/80 bg-secondary/50 px-2 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/project/${project.id}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors cursor-pointer"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
            >
              View All Projects <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
