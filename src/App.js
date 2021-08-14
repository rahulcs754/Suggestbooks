import { useState } from "react";
import "./styles.css";

export default function App() {
  var [output, setoutput] = useState("");

  function poppularClickHandler(e) {
    var userInput = "popular";
    var callback =
      "https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1";
    console.log(callback);
    if (userInput !== "" && userInput !== null && userInput !== undefined) {
      fetch(callback)
        .then((res) => res.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } else {
      alert("Please enter valid value");
    }
  }

  return (
    <div className="App">
      <h1>🎥 Movie</h1>
      <p>
        you are searching movie like wanted or series then you just type name in
        input box
      </p>

      <button onClick={poppularClickHandler}>Popular </button>
    </div>
  );
}
