import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Construction from "./components/Inc/Inc";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Construction />} />
          <Route path="/blog" element={<Construction />} />
          <Route path="/contact" element={<Construction />} />
          <Route path="/about" element={<Construction />} />
          <Route path="*" element={<Construction />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
