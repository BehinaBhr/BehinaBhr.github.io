import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Skill from "./pages/Skill/Skill";
import Contact from "./pages/Contact/Contact";
import Experience from "./pages/Experience/Experience";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
