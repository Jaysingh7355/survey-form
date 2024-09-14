import { styled } from "@mui/system";
import { Box, Container, Paper } from "@mui/material";

// Styled Box component
export const StyledBox = styled(Box)({
  mt: 4,
  mb: 4,
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
});

// Styled Container component
export const StyledContainer = styled(Container)({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#bdd1f2", // Fixed to `backgroundColor`
  padding: "1rem",
});

// Styled Paper component
export const StyledPaper = styled(Paper)({
  backgroundColor: "#F5F5F5", // Fixed to `backgroundColor`
  padding: "2rem",
  width: "100%",
  maxWidth: "900px", // Responsive widths can be handled directly in component
  minHeight: "auto",
  textAlign: "center",
  borderRadius: "3rem",
});
