import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MyNavbar from './components/Navbar';  // Assuming your navbar component is named MyNavbar
import Home from "./pages/Home";               // Adjusting for PascalCase for filenames
import Login from "./pages/Login";

const App: React.FC = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
