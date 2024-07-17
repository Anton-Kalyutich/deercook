import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import friedPotatoImage from './fried-potato.jpeg';
import eggsBenedictImage from './eggs-benedict.jpg';
import greekSaladImage from './greek-salad.jpg'

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function Row() {
  const [recipes, setRecipes] = useState([]);

  const imageMapping = {
    'Fried Potato': friedPotatoImage,
    'Eggs Benedict': eggsBenedictImage,
    'Greek Salad': greekSaladImage,
  };

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
    <>
      <Typography sx={{ marginLeft: "20px", paddingTop: "50px" }} variant="h6">
        Have You Tried These Already?
      </Typography>
      <Box
        sx={{
          paddingTop: "20px",
          paddingLeft: "20px",
          paddingBottom: "50px",
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "flex-start",
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
            <CardMedia
              component="img"
              alt="fried potatos"
              height="140"
              image={imageMapping[recipe.dish_name]}
            />
            <CardContent>
              <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
                {recipe.dish_name}
              </Typography>
              <Typography variant="body2">{recipe.description}</Typography>
            </CardContent>
            <CardActions sx={{ mt: "auto" }}>
              <Button sx={{ color: "#8B4513" }} size="small">
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default Row;
