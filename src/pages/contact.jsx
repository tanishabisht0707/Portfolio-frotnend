import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError(""); setSuccess(false);

    try {
      const res = await fetch("https://portfolio-backend-1-yko4.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) { setSuccess(true); setFormData({ name: "", email: "", message: "" }); }
      else setError("Failed to send message. Please try again.");
    } catch (err) {
      console.error(err); setError("Something went wrong. Please try again later.");
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
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
            {/* Contact Info */}
            <div className="flex flex-col items-center gap-8 justify-center">
              {/* Email */}
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="p-4 bg-secondary rounded-xl">
                  <Mail className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-lg font-bold">Email Me</h3>
                <a
                  href="mailto:tanishabisht007@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  tanishabisht007@gmail.com
                </a>
              </div>

              {/* Location */}
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="p-4 bg-secondary rounded-xl">
                  <MapPin className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-lg font-bold">Location</h3>
                <p className="text-muted-foreground">Remote / India</p>
              </div>

              {/* LinkedIn */}
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="p-4 bg-secondary rounded-xl">
                  <Linkedin className="w-7 h-7 text-foreground" />
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
            </div>

            {/* Contact Form */}
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
                Send Me a Message
              </h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
  className="w-full p-3 border rounded-lg bg-background text-black placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
  className="w-full p-3 border rounded-lg bg-background text-black placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  required
  className="w-full p-3 border rounded-lg bg-background text-black placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-primary text-background px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors ${
                    loading ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {success && (
                  <p className="text-green-500 font-medium mt-2 text-center">
                    Message sent successfully!
                  </p>
                )}
                {error && (
                  <p className="text-red-500 font-medium mt-2 text-center">{error}</p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
