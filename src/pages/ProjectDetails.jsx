import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

function ImageSlider({ images }) {
  const [current, setCurrent] = React.useState(0);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
   <div className="flex justify-center">
  <div className="relative md:w-[60%] w-full h-[70vh] overflow-hidden rounded-xl shadow-lg">
    
    <img
      src={images[current]}
      className="w-full h-full object-cover transition-all duration-700"
      alt=""
    />

    <button
      onClick={prev}
      className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition"
    >
      ‹
    </button>

    <button
      onClick={next}
      className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition"
    >
      ›
    </button>

  </div>
</div>

  );
}

export default function ProjectDetail() {
  const { id } = useParams();
const projects = [
  {
    id: 1,
    title: "Devray Website",
    shortDescription:
      "High-performance  website focused on branding, lead generation, and SEO optimization.",
    description:
      "Designed and developed a complete modern  website for DevRay to strengthen their digital presence and increase inbound business leads. Built the full frontend using React and Tailwind CSS with reusable component architecture and responsive layouts. Integrated backend APIs and mail services for lead handling, optimized site performance, and implemented SEO best practices to improve visibility and engagement. The project significantly improved user experience, page load speed, and overall brand credibility.",
    images: ["/devray.png", "/devray2.png", "/devray3.png"],
    technologies: ["React", "Tailwind CSS", "Node.js", "REST API", "Email Service", "SEO"]
  },

  {
    id: 2,
    title: "Enterprise Document Management System",
    shortDescription:
      "Secure enterprise-grade DMS with document lifecycle, approvals, and role-based access.",
    description:
      "Built a full-scale Document Management System for enterprise operations, covering document upload, version control, folder management, dynamic form metadata, approval workflows, OCR-based extraction, and strict role-based access control. Designed complex user flows, implemented modular UI components, and integrated Java backend APIs. The system streamlined internal operations, reduced manual processing, and significantly enhanced document security and compliance.",
    images: ["/dms_dashboard.png"],
    technologies: ["React", "Tailwind CSS", "REST API", "Java Backend", "OCR Integration"]
  },

  {
    id: 3,
    title: "Multi-Tenant Learning Management System",
    shortDescription:
      "Scalable LMS platform with advanced dashboards, courses, analytics, and multi-role support.",
    description:
      "Developed a comprehensive multi-tenant Learning Management System supporting multiple organizations, trainers, and learners within a unified platform. Implemented dashboard analytics, course creation and management, lesson delivery, assignments, quizzes, calendar scheduling, progress tracking, and reporting modules. Built responsive UI and optimized state management to handle complex workflows and large datasets, delivering a seamless learning experience.",
    images: ["/lms_dashobard.png"],
    technologies: ["React", "Tailwind CSS", "REST API", "Analytics", "State Management"]
  },

  {
    id: 4,
    title: "Human Resource Management System",
    shortDescription:
      "End-to-end HRMS platform for managing employee lifecycle and operations.",
    description:
      "Contributed to building a robust HRMS handling employee onboarding, profiles, attendance tracking, leave management, payroll views, performance monitoring, and reporting. Developed reusable UI modules and interactive dashboards, ensuring high responsiveness and data accuracy. The platform significantly simplified HR workflows and improved organizational efficiency.",
    images: ["/hrms.png"],
    technologies: ["React", "HTML", "CSS", "Tailwind CSS", "JavaScript"]
  },

  {
    id: 5,
    title: "Maple Cloud Technologies Website",
    shortDescription:
      " website with branding, testimonials system, and backend integration.",
    description:
      "Developed and maintained the official  website for Maple Cloud Technologies using React and Tailwind CSS. Implemented Node.js APIs with SQL database for testimonials management including GET, POST, and DELETE operations. Worked on UI redesign, content structuring, responsive behavior, mail configuration, and continuous feature enhancements to ensure a polished and professional brand presence.",
    images: ["/maple_web.png", "/maple2.png", "/maple3.png"],
    technologies: ["React", "Tailwind CSS", "Node.js", "SQL", "REST API"]
  }
];



  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center">Project Not Found</div>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="pt-24">
        <ImageSlider images={project.images} />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <Link to="/" className="flex items-center text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft size={18} className="mr-2" /> Back
        </Link>

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        <p className="text-muted-foreground text-lg mb-10">
          {project.shortDescription}
        </p>

        <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
        <p className="text-muted-foreground leading-relaxed mb-12">
          {project.description}
        </p>

        <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
        <div className="flex flex-wrap gap-3">
          {project.technologies.map(tech => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
