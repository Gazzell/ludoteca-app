import "./App.css";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { UnprotectedRoute } from "./components/UnprotectedRoute";
import { NavBar } from "./components/NavBar/NavBar";
import { useAuth } from "./context/authContext";
import { Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function App() {
  const { user, logout, loading } = useAuth();
  const handleLogout = async () => {
    await logout();
  };
  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <CircularProgress style={{ width: "100px", height: "100px" }} />
        </Box>
      </div>
    );
  return (
    <Container maxWidth="lg">
      <NavBar onLogout={handleLogout} user={user}></NavBar>
      <Routes>
        <Route path="/" element={<Navigate to="/games" />} />
        <Route
          path="/games"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <UnprotectedRoute>
              <Login />
            </UnprotectedRoute>
          }
        />
      </Routes>
    </Container>
  );
}

export default App;
