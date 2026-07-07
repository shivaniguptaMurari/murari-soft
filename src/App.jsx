import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import { styles } from "./theme";
import Technology from "./pages/Technology";

export default function App() {
  return (
    <BrowserRouter>
      <div style={styles.shell}>
        <div style={styles.featherGlow} />
        <Header />
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Technology" element={<Technology />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
