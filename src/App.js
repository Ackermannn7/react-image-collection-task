import React from "react";
import "./index.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import { CollectionReview } from "./CollectionReview";
import { NotFound } from "./NotFound";
import { AddPhoto } from "./AddPhoto";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection/:id" element={<CollectionReview />} />
        <Route path="/addphoto" element={<AddPhoto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
