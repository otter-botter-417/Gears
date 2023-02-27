import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";

const Header = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ bgcolor: "#DCD6D6" }}>
        <Typography variant="h2" align="center">
          Gears
        </Typography>
      </Box>
    </Container>
  );
};

export default Header;
