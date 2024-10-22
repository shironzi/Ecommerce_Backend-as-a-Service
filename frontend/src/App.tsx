import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MyNavbar from './components/Navbar';

import Home from "./pages/home";
import Login from "./pages/login";

const App: React.FC = () => {
  return (
    <Router>
      <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  );
};

export default App;
