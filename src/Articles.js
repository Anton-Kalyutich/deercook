import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import axios from "axios";
import { useState, useEffect } from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [showFull, setShowFull] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let request = await axios.get(`http://54.166.154.115:8000/articles/`);
        setArticles(request.data);
        // Initialize showFull state with false for each article
        setShowFull(Array(request.data.length).fill(false));
        console.log(request);
        return request;
      } catch (error) {
        if (error.response) {
          console.error("Error response:", error.response.data);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Axios error:", error.message);
        }
        console.error("Axios error config:", error.config);
      }
    }
    fetchData();
  }, []);

  const handleToggle = (index) => {
    setShowFull((prev) => {
      const newShowFull = [...prev];
      newShowFull[index] = !newShowFull[index];
      return newShowFull;
    });
  };

  return (
    <>
      <Typography sx={{ marginLeft: "20px", paddingTop: "20px" }} variant="h6">
        Read About Food
      </Typography>
      <Box
        sx={{
          paddingTop: "20px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "center",
          gap: "20px",
        }}
      >
        {articles.map((article, index) => (
          <Card
            key={index}
            sx={{
              width: "100%", // Make card take full width
              maxWidth: "100%", // Ensure it doesn't exceed full width
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
                {article.title}
              </Typography>
              <Typography variant="body2">
                {showFull[index]
                  ? article.content
                  : `${article.content.substring(0, 500)}...`}
              </Typography>
            </CardContent>
            <CardActions sx={{ mt: "auto" }}>
              <Button sx={{ color: '#8B4513' }} size="small" onClick={() => handleToggle(index)}>
                {showFull[index] ? "Read Less" : "Read More"}
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default Articles;
