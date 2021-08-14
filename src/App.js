import { useState } from "react";
import "./styles.css";

export default function App() {
  var [movie, setmovie] = useState("");

  function poppularClickHandler(e) {
    var userInput = "popular";
    var callback =
      "https://api.themoviedb.org/3/movie/popular?api_key=eef068dc56a744f6b8d02582e584cf18&language=en-US&page=1";

    fetch(callback)
      .then((res) => res.json())
      .then((res) => setmovie(res.results))
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="App">
      <h1>🎥 Movie</h1>
      <p>
        you are searching movie like wanted or series then you just type name in
        input box
      </p>

      <button onClick={poppularClickHandler}>Popular </button>

      <hr />
      <div className="movieview">
        <ul>
          {Object.keys(movie).map((item, index) => {
            console.log(item);
            return <li key={index}>{movie[item].id}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
