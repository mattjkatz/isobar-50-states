import React from "react";
import States from "./pages/States";
import Guess from "./pages/Guess";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/states" element={<States />} />
        <Route path="/guess" element={<Guess />} />
      </Routes>
    </div>
  );
}

export default App;
