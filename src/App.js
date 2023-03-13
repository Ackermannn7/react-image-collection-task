import React from "react";
import "./index.scss";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import { CollectionReview } from "./CollectionReview";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection/:id" element={<CollectionReview />} />
      </Routes>
    </div>
  );
}

export default App;
