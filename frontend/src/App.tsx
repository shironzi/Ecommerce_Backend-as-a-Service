import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MyNavbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/dashboard";
import Inbox from "./components/Inbox";

const App: React.FC = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Main />}></Route>
        <Route path="/inbox" element={<Inbox />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
