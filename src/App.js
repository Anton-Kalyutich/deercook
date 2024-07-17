import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let request = await axios.get("http://54.166.154.115:8000/recipes/");
        setRecipes(request.data);
        console.log(recipes);
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
    <div className="App">
      <h1>Recipe List</h1>
      <p>Description Here</p>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h2>{recipe.dish_name}</h2>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
