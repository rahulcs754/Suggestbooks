import { useState } from "react";
import "./styles.css";

const postUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face";

export default function App() {
  var [datalist, setdatalist] = useState("");

  function poppularClickHandler(e) {
    var featureInput = "popular";
    var userInput = e.target.getAttribute("data-tag");

    var movieUrl = `https://api.themoviedb.org/3/${userInput}/${featureInput}?api_key=eef068dc56a744f6b8d02582e584cf18&language=en-US&page=1`;

    fetch(movieUrl)
      .then((res) => res.json())
      .then((res) => setdatalist(res.results))
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="App">
      <h1>
        <span>🎥</span> Movie
      </h1>
      <p>you can check popular Movies and Tv Shows</p>

      <button data-tag="movie" onClick={poppularClickHandler}>
        Popular Movies{" "}
      </button>
      <button data-tag="tv" onClick={poppularClickHandler}>
        Popular Tv Shows{" "}
      </button>

      <hr />
      <div className="movieview">
        <div className="card-box">
          {Object.keys(datalist).map((item, index) => {
            return (
              <div className="card" key={index}>
                <img
                  src={postUrl + datalist[item].poster_path}
                  alt={datalist[item].original_title}
                />
                <div className="card-text">
                  <p className="text-set"> {datalist[item].original_title}</p>
                  <p> rate : {datalist[item].vote_average}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
