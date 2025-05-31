import "./App.css";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/home";
import About from "./Components/about";
import Art from "./Components/art";
import Animation from "./Components/animation";
import Contact from "./Components/contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/art" element={<Art />} />
            <Route path="/animation" element={<Animation />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
