import React from "react";
import Box from "@mui/material/Box";

import Row from "./Row";
import Articles from "./Articles";
import SearchAppBar from "./Bar";
import Footer from "./Footer";

function App() {
  return (
    <Box sx={{ padding: 5 }}>
      <SearchAppBar />
      <Row />
      <Articles />
      <Footer />
    </Box>
  );
}

export default App;
