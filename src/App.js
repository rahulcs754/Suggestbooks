import { useState } from "react";
import "./styles.css";
var basePath = "https://tastedive.com/api/similar?k=421788-rahulshu-9015KM8J&";

export default function App() {
  var [output, setoutput] = useState("");

  function searchSuggestHandler(e) {
    var userInput = e.target.value;
    var callback = constructURL(userInput);
    console.log(callback);
    /*fetch(callback)
      .then((res) => res.json())
      .then((data) => console.log(data));*/
  }

  function constructURL(userInput) {
    var encodedURI = encodeURI(userInput);
    return `${basePath}q=${encodedURI}`;
  }

  return (
    <div className="App">
      <h1>Welcome Suggestion Website</h1>
      <p>
        {" "}
        you are searching movie like wanted or series then you just type name in
        input box
      </p>
      <input onChange={searchSuggestHandler} />
      <h2>Output Below</h2>
    </div>
  );
}
