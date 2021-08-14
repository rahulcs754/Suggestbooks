import { useState } from "react";
import "./styles.css";

const imgUrl =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80";
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
        <div class="card-box">
          {Object.keys(movie).map((item, index) => {
            return (
              <div class="card">
                <img src={imgUrl} />
                <div class="card-text">{movie[item].original_title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
