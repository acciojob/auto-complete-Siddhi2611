import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim() === "") {
        setSuggestions([]);
      } else {
        // simulate async search with a small delay
        const filtered = fruits.filter((fruit) =>
          fruit.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestions(filtered);
      }
    }, 300); // delay 300ms

    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Search item</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to search..."
      />
      <ul>
        {suggestions.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
