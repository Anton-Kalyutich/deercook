import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

function Row() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let request = await axios.get(`http://54.166.154.115:8000/recipes/`);
        setRecipes(request.data);
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

  return (
    <Box
      sx={{
        paddingTop: "50px",
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
        alignItems: "stretch",
        alignContent: "center",
        gap: "20px",
      }}
    >
      {recipes.map((recipe, index) => (
        <Card
          key={index}
          sx={{
            minWidth: 275,
            maxWidth: 275,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
              {recipe.dish_name}
            </Typography>
            <Typography variant="body2">{recipe.description}</Typography>
          </CardContent>
          <CardActions sx={{ mt: "auto" }}>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}

export default Row;
