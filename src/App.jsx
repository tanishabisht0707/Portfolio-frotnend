import { Route, Routes,BrowserRouter } from "react-router-dom";
// import { queryClient } from "./lib/queryClient";
// import { QueryClientProvider } from "@tanstack/react-query";
// import { Toaster } from "@/components/ui/toaster";
// import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "./pages/NotFound";
import Home from "./pages/home";
import Projects from "./pages/projects";
import ProjectDetail from "./pages/ProjectDetails";
import About from "./pages/about";
import Contact from "./pages/contact";
import Scroll from "./components/Scroll";



function App() {
  return (
   <>
    <div className="app">
    <BrowserRouter>
    <Scroll/>
    <Routes>
      
    <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/project/:id" element={<ProjectDetail/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/not-found" element={<NotFound/>} />

    </Routes>
    </BrowserRouter>
   </div>
   </>
  );
}

export default App;
