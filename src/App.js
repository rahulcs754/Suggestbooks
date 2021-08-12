import { useState } from "react";
import "./styles.css";

export default function App() {
  var [data, setdata] = useState("");

  function searchSuggestHandler(e) {
    console.log(e.target.value);
    var basePath =
      "https://kitsu.io/api/edgeanime?filter[categories]=adventure";
    fetch(basePath)
      .then((res) => res.json())
      .then((data) => console.log(data));
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
