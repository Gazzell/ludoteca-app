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
  width: "auto",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.down("sm")]: {
    width: "auto",
    marginTop: 0,
    alignItems: "center",
    direction: "column-reverse",
    justifyContent: "space-around",
  },
};
export const logout = {
  display: "inline",
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
