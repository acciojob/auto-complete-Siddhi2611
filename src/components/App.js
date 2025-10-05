import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState(fruits); // show all initially

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim() === "") {
        setSuggestions(fruits); // show all items initially
      } else {
        const filtered = fruits.filter((fruit) =>
          fruit.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestions(filtered);
      }
    }, 300);

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
