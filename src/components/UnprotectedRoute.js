import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export function UnprotectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading)
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress style={{ width: "100px", height: "100px" }} />
      </Box>
    );
  if (user) return <Navigate to="/" />;
  return <>{children}</>;
}
