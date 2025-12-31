import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <a href="/" className="font-display text-2xl font-bold tracking-tight">
            TB<span className="text-primary">.</span>
          </a>
          <p className="mt-2 text-sm text-muted-foreground">
            Building digital experiences that matter.
          </p>
        </div>

        <div className="flex gap-6">
          {/* <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a> */}
          <a href="https://www.linkedin.com/in/tanisha-bisht07/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          {/* <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="w-5 h-5" />
          </a> */}
          <a href="mailto:tanishabisht007@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tanisha Bisht.
        </div>
      </div>
    </footer>
  );
}
