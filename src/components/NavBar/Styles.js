import { createTheme } from "@mui/material";
const theme = createTheme();

export const appBar = {
  borderRadius: 5,
  margin: "30px 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 50px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
};

export const toolbar = {
  display: "flex",
  justifyContent: "flex-end",
  width: "400px",
  [theme.breakpoints.down("sm")]: {
    width: "auto",
  },
};
export const profile = {
  display: "flex",
  justifyContent: "space-between",
  width: "400px",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "auto",
    marginTop: 20,
    justifyContent: "center",
  },
};
export const logout = {
  display: "inline",
  marginLeft: "20px",
};
export const userName = {
  display: "inline",
  alignItems: "center",
  textAlign: "center",
};
export const brandContainer = {
  display: "flex",
  alignItems: "center",
};
