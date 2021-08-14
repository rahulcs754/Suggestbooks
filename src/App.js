import { useState } from "react";
import "./styles.css";

var basePath =
  "https://tastedive.com/api/similar?k=421788-rahulshu-9015KM8J&limit=5&q=";

export default function App() {
  var [output, setoutput] = useState("");

  function searchSuggestHandler(e) {
    var userInput = e.target.value;
    var callback =
      "https://tastedive.com/api/similar?k=421788-rahulshu-9015KM8J&limit=5&q=underworld";
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
      <h1>Welcome Suggestion Website</h1>
      <p>
        you are searching movie like wanted or series then you just type name in
        input box
      </p>
      <input onBlur={searchSuggestHandler} />
      <h2>Output Below</h2>
    </div>
  );
}
