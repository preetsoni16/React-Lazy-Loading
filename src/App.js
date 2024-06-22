import React, { Suspense } from "react";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/service" element={<Service />}></Route>

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
