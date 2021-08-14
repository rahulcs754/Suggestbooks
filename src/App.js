import { useState } from "react";
import "./styles.css";

const imgUrl =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80";
const postUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face";
export default function App() {
  var [movie, setmovie] = useState("");

  function poppularClickHandler(e) {
    var userInput = "popular";
    var callback = `https://api.themoviedb.org/3/movie/${userInput}?api_key=eef068dc56a744f6b8d02582e584cf18&language=en-US&page=1`;

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

      <button onClick={poppularClickHandler}>Popular Movies </button>

      <hr />
      <div className="movieview">
        <div className="card-box">
          {Object.keys(movie).map((item, index) => {
            return (
              <div className="card">
                <img
                  src={postUrl + movie[item].poster_path}
                  alt={movie[item].original_title}
                />
                <div className="card-text">
                  <p className="text-set"> {movie[item].original_title}</p>
                  <p> rate : {movie[item].vote_average}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
