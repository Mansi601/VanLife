import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Pages/Navbar";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
