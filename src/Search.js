import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';

const Search = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    fetchResults();
  }, []);

  const submitSearch = (e) => {
    e.preventDefault();
    searchRef.current.value = '';
  };

  const fetchResults = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    setResults(data);
  };

  return (
    <div>
      <input
        ref={searchRef}
        type="search"
        placeholder="Enter a value"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={(e) => submitSearch(e)}>Search</button>
      {results
        .filter((val) => {
          if (search === '') {
            return val;
          } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        })
        .map((result) => {
          return <div key={result.id}>{result.name}</div>;
        })}
    </div>
  );
};

export default Search;
