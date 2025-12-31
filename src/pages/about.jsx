import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-8">About Me</h1>

            <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
              <p className="text-xl leading-relaxed text-foreground/90 font-medium">
                I'm Tanisha Bisht, a Frontend Developer with strong hands-on experience building
                enterprise-scale web applications including Document Management Systems (DMS),
                Learning Management Systems (LMS), and HRMS platforms.
              </p>

              <p className="mt-6">
                I specialize in React.js, Tailwind CSS, and modern UI architecture. I have owned
                complete frontend development for complex business workflows including role-based
                access control, document lifecycles, analytics dashboards, and large-scale
                application systems, delivering reliable and scalable digital products.
              </p>
            </div>
          </motion.div>

          {/* Achievement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Award className="w-32 h-32" />
            </div>

            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-xl shadow-lg shadow-primary/25">
                  <Award className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Employee of the Month</h3>
                  <p className="text-muted-foreground">
                    Awarded Employee of the Month at Maple Cloud Technologies for exceptional project ownership,
                    consistent on-time delivery, and building scalable frontend architectures across multiple
                    enterprise platforms.
                  </p>
                </div>
              </div>

              {/* Certificate Image */}
              <img
                src="/letter.png"
                alt="Employee of the Month Certificate"
                className="mt-4 rounded-xl shadow-lg border border-white/10 max-w-md"
              />
            </div>
          </motion.div>

          {/* Experience */}
          <div className="space-y-12">
            <h2 className="text-2xl font-bold font-display border-b border-white/10 pb-4">
              Experience
            </h2>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-4 md:gap-8"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center border border-white/10 shrink-0">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div className="w-px h-full bg-white/10 my-2"></div>
              </div>

              <div className="pb-12">
                <div className="flex flex-wrap items-baseline justify-between gap-4 mb-2">
                  <h3 className="text-xl font-bold">Software Developer</h3>
                  <span className="text-sm font-mono text-muted-foreground">
                    Aug 2024 — Present
                  </span>
                </div>

                <p className="text-primary/80 mb-4 font-medium">
                  Maple Cloud Technologies
                </p>

                <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground">
                  <li>Sole Frontend Developer for enterprise platforms including DMS, LMS, and HRMS.</li>
                  <li>Designed and built complete frontend architecture for Document Management System with approval workflows, dynamic forms, OCR integration, and role-based access control.</li>
                  <li>Implemented scalable React component architecture and optimized state management for large datasets and complex user flows.</li>
                  <li>Integrated React frontend with Java backend APIs including validations, error handling, and performance optimizations.</li>
                  <li>Recognized as Employee of the Month for strong project ownership and consistent delivery.</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Education */}
          <div className="space-y-12 mt-12">
            <h2 className="text-2xl font-bold font-display border-b border-white/10 pb-4">
              Education
            </h2>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-4 md:gap-8"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center border border-white/10 shrink-0">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-4 mb-2">
                  <h3 className="text-xl font-bold">
                    Bachelor of Computer Applications (BCA)
                  </h3>
                  <span className="text-sm font-mono text-muted-foreground">
                    2023 — 2026
                  </span>
                </div>

                <p className="text-muted-foreground">
                  Indira Gandhi National Open University (IGNOU)
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
