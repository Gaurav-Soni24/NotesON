"use client";
import { useState } from 'react';
import SearchResult from './SearchResult';
import './Style/SearchComponent.css';
import 'remixicon/fonts/remixicon.css';
import topSearch from './TopSearch.js';
import './Style/Buttons.css'

const SearchComponent = ({ data }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [showButtons, setShowButtons] = useState(true);

  const handleSearch = (searchQuery) => {
    const filteredResults = data.filter(item =>
      item.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filteredResults);
    setNoResults(filteredResults.length === 0);
    setShowButtons(false); // Hide buttons when search is performed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };

  const handleButtonClick = (e) => {
    const buttonQuery = e.target.value;
    setQuery(buttonQuery);
    handleSearch(buttonQuery);
  };

  return (
    <div className='search-body'>
      <form onSubmit={handleSubmit} className='form'>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className='input'
        />
        <button type="submit" className='seach-icon'>
          <i className="ri-search-line"></i>
        </button>
      </form>
      {showButtons && (
        <div className='buttons'>
          {topSearch.map((item, index) => (
            <button key={index} value={item.Text} onClick={handleButtonClick}>
              {item.Text}
            </button>
          ))}
        </div>
      )}
      {noResults && (
        <p className='noResult'>
          <span>404</span> - No PDF found
        </p>
      )}
      <div className='result'>
        {results.map((result, index) => (
          <SearchResult
            key={index}
            text={result.text}
            link={result.link}
            title={result.title}
            category={result.category}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
