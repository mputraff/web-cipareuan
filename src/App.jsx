import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Infografis from "./pages/Infografis";
import Struktur from "./pages/Struktur";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/infografis" element={<Infografis />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/struktur-pemerintahan" element={<Struktur />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;