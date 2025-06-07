//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import BlogPage from "./pages/BlogPage";
import NoPage from "./components/NoPage";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
//import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <div className="mt-20">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<BlogPage />} />
            <Route path="projects" element={<Projects />} />
            <Route path="aboutMe" element={<AboutMe />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
