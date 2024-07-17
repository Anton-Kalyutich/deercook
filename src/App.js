import React from "react";
import Row from "./Row";
import Articles from "./Articles";
import SearchAppBar from "./Bar";

function App() {
  return (
    <div>
      <SearchAppBar />
      <Row />
      <Articles />
    </div>
  );
}

export default App;
