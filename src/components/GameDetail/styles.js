import { createTheme } from "@mui/material";
const theme = createTheme();

export const media = {
  borderRadius: "20px",
  objectFit: "cover",
  width: "100%",
  maxHeight: "600px",
};

export const card = {
  display: "flex",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
};

export const section = {
  borderRadius: "20px",
  margin: "10px",
  flex: 1,
};
export const imageSection = {
  marginLeft: "20px",
  marginRight: "20px",
  marginTop: "10px",
  marginBottom: "10px",
  maxWidth: "600px",
  maxHeight: "600px",
};
export const recommendedPosts = {
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
};
export const loadingPaper = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  borderRadius: "15px",
  height: "39vh",
};
export const commentsOuterContainer = {
  display: "flex",
  justifyContent: "space-between",
};
export const commentsInnerContainer = {
  height: "200px",
  overflowY: "auto",
  marginRight: "30px",
};

export const buttonSection = {
  justifyContent: "center",
};
