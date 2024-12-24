import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Category = () => {
  return (
    <div style={{ marginTop: "80px" }}>
      <Container maxWidth="lg">
        <Box p={4}>
          <Typography variant="h4" gutterBottom>
            Categori
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Category;
