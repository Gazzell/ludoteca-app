import React from "react";
import { useAuth } from "../context/authContext";

export function Home() {
  const { user } = useAuth();
  return (
    <div>
      <div>Home</div>
      <div>User: {user.email}</div>
    </div>
  );
}
