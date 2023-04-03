import React from "react";
import { useAuth } from "../context/authContext";
import { Container } from "@mui/material";
import { NavBar } from "./NavBar/NavBar";

export function Home() {
  const { user, logout, loading } = useAuth();
  const handleLogout = async () => {
    await logout();
  };
  if (loading) return <h1>Loading</h1>;

  return (
    <Container maxWidth="lg">
      <NavBar onLogout={handleLogout} user={user}></NavBar>
    </Container>
  );
}
