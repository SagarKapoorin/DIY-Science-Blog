import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import LoginPage from "./scenes/login";
import Experimentss from "./scenes/Experiment";
import './App.css'

import { HomePage } from "./scenes/home";

function App() {
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            {/* <Route
              path="/edit"
              element={isAuth ? <Edit /> : <Navigate to="/" />}
            /> */}
            {/* <Route
              path="/newexpirement"
              element={isAuth ? <New /> : <Navigate to="/" />}
            /> */}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
