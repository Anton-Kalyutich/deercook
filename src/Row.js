import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'stretch',
      gap: '20px',
      maxWidth: '500px',
    }}>
      {recipes.map((recipe, index) => (
        <Card key={index} sx={{ minWidth: 275, flex: 1 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {recipe.dish_name}
            </Typography>
            <Typography variant="body2">
              {recipe.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Row;
