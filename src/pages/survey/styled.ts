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

// Styled Container component with full width
export const StyledContainer = styled(Container)({
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#bdd1f2", // Background color
  padding: "1rem",
});

// Styled Paper component
export const StyledPaper = styled(Paper)({
  backgroundColor: "#F5F5F5",
  padding: "2rem",
  width: "100%",
  maxWidth: "900px", // Maximum width for Paper (will center itself inside the full-width container)
  minHeight: "auto",
  textAlign: "center",
  borderRadius: "3rem",
});

