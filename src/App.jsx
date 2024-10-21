import About from "./pages/About";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Ranking from "./pages/Ranking";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
      {/* 
      <Home />
        <About />
        <Calendar />
        <Ranking /> 
        */}
    </div>
  );
}

export default App;
