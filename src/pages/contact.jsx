import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Let’s Work Together
            </h1>

            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Have a project in mind or looking to build something amazing?  
              Reach out to me directly — I’d love to connect.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card p-10 rounded-3xl border border-white/5 shadow-xl grid gap-10 md:grid-cols-2"
          >

            {/* Email */}
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-secondary rounded-xl">
                <Mail className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-lg font-bold">Email Me</h3>
              <a
                href="mailto:tanishabisht007@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
              Click To Email Me
              </a>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-secondary rounded-xl">
                <MapPin className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-lg font-bold">Location</h3>
              <p className="text-muted-foreground">Remote / India</p>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-secondary rounded-xl">
                <Linkedin className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-lg font-bold">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/tanisha-bisht07/"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Connect with me
              </a>
            </div>


          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
