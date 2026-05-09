import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import News from "./pages/News";
import Notice from "./pages/Notice";
import Contact from "./pages/Contact";
import MissionVisionGoals from "./pages/about/MissionVisionGoals";
import ChairpersonMessage from "./pages/about/ChairpersonMessage";
import ExecutiveCommittee from "./pages/about/ExecutiveCommittee";
import Membership from "./pages/about/Membership";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={<Navigate to="/about/mission-vision-goals" replace />}
        />
        <Route
          path="/about/mission-vision-goals"
          element={<MissionVisionGoals />}
        />
        <Route
          path="/about/chairperson-message"
          element={<ChairpersonMessage />}
        />
        <Route
          path="/about/executive-committee"
          element={<ExecutiveCommittee />}
        />
        <Route path="/about/membership" element={<Membership />} />

        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;