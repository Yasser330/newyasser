import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from "./components/pages/Homepage/Home";
import Ourstory from "./components/pages/Ourstorypage/Ourstory";
import News from "./components/pages/Newspage/News";
import Contact from "./components/pages/Contact/Contact";
import Productsandservices from "./components/pages/Pspage/Productsandservices";
import Granularurea from "./components/pages/Granularurea/Granularurea";
import Prilledurea from "./components/pages/Prilledurea/Prilledurea";
import Calciumammoniumnitrate from "./components/pages/Calciumammoniumnitrate/Calciumammoniumnitrate";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourstory" element={<Ourstory />} />
        <Route path="/news" element={<News />} />
        <Route path="/productsandservices" element={<Productsandservices/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/granularurea" element={<Granularurea/>} />
        <Route path="/prilledurea" element={<Prilledurea/>} />
        <Route path="/calciumammoniumnitrate" element={<Calciumammoniumnitrate/>} />
      </Routes>
    </>
  );
}

export default App;
