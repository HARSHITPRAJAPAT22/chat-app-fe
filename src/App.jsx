import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Profilepage from "./pages/ProfilePage";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useContext(AuthContext);

  return (
    <div className="bg-[url('/bgImage.svg')] bg-contain">
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/profile"
          element={authUser ? <Profilepage /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
