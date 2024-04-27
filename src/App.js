import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound/NotFound";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
