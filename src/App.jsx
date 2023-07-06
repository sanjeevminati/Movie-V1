import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import movies from "./movie.json";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="main">
          {movies.map((e) => {
            return <Movies title={e.Title} year={e.Year} poster={e.Poster} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
