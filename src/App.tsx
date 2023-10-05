import React from "react";
import NavBar from "./components/Nav/NavBar";
import FrontPage from "./pages/FrontPage";

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <FrontPage />
    </div>
  );
};

export default App;
