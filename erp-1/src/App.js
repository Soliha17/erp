import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar.jsx";
import Navbar from "./components/navbar/Navbar";
import MainFirst from "./components/main1/Index";
import MainSecond from "./components/main2/Index"
import MainThird from "./components/main3/Index.jsx";

function App() {
  const [hambur, setHambur] = useState(false)
  return (
    <div>
      <Sidebar hambur={hambur} setHambur={setHambur} />
      <section className="section">
        <Navbar hambur={hambur} setHambur={setHambur} />
        <Routes>
          <Route exact path="" element={<MainFirst/>} />
          <Route path="/second" element={<MainSecond/>} />
          <Route path="/third" element={<MainThird/>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
