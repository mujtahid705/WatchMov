import React from "react";
import NavBar from "./components/Nav/NavBar";
import FrontPage from "./pages/FrontPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<FrontPage />} />

          <Route path="/home" element={<HomePage />} />

          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
