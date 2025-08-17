import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import News from "./pages/News";
import DetailNews from "./pages/DetailNews";
import Contact from "./pages/Contact";
import Infografis from "./pages/Infografis";
import Struktur from "./pages/Struktur";
import Admin from "./pages/LoginAdmin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/infografis" element={<Infografis />} />
          <Route path="/berita" element={<News />} />
          <Route path="/berita/:id" element={<DetailNews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/struktur-pemerintahan" element={<Struktur />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;