import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import TablePage from "./pages/tablePage/TablePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/table" element={<TablePage />} />
      </Routes>
    </Router>
  );
}

export default App;
