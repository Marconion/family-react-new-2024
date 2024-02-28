import React from "react";
import { Box } from "@mui/material";

export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <Box sx={{ fontSize: "15px" }}>
        Copyright © "Family Event Place" - {date}
      </Box>
    </footer>
  );
};
