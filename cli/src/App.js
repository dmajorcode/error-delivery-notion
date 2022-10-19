import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Detail from "./routes/Detail";
import Base from "./routes/Base";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Handling main page
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Detail />} />
        <Route path="/submit" element={<Base />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
