import { useEffect, useRef, useState } from "react";
import { suggestionsList } from "../../country/country";

export default function SearchBar() {
  const [searchedText, setSearchedText] = useState(""); // Stores the user's input text
  const [countryData, setCountryData] = useState(suggestionsList); // Holds the country list
  const [suggestion, setSuggestion] = useState([]); // Stores filtered search suggestions
  const [selectedCountry, setSelectedCountry] = useState(""); // Stores the selected country
  const debounceRef = useRef(null); // Ref to store the debounced function reference

  // Function to filter country suggestions based on the search input
  function getSearchSuggestion(text) {
    setSuggestion(() => {
      let textTolowerCase = text.toLowerCase(); // Convert input text to lowercase
      if (text === "") {
        return []; // Return empty array if input is empty
      }
      let data = countryData.filter((v) => {
        return v.name.toLowerCase().trim().includes(textTolowerCase); // Match country names with input
      });
      console.log(data);
      return data;
    });
  }

  // Function to update selected country and clear suggestions
  function updateSelectedCountry(country) {
    setSelectedCountry(country.flag + country.name);
    setSuggestion([]); // Clear suggestions when a country is selected
  }

  // Debounce function to delay execution of a given function
  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer); // Clear previous timer
      timer = setTimeout(() => fn(...args), delay); // Set a new timer with delay
    };
  }

  // Initialize debounce function and store it in a ref to persist between renders
  useEffect(() => {
    debounceRef.current = debounce(getSearchSuggestion, 300);
  }, []);

  // Call the debounced function whenever searchedText changes
  useEffect(() => {
    debounceRef.current(searchedText);
  }, [searchedText]);

  return (
    <div className="center-div flex-col p-20">
      <h1 className="font-xl mb-20">Search Bar</h1>
      <input
        type="text"
        value={searchedText}
        className=""
        onChange={(e) => setSearchedText(e.target.value)}
        placeholder="Search Country...."
      />
      <div className="flex flex-col width100" style={{ overflowY: "scroll" }}>
        {suggestion.map((v, i) => {
          return (
            <p
              key={i}
              onClick={() => updateSelectedCountry(v)}
              className="pointer"
            >
              <span className="mr-5">{v.flag}</span> {v.name}
            </p>
          );
        })}
      </div>
      {selectedCountry && (
        <div className="width100 mt-20">
          <label className="font-base mb-20">Selected Country</label>
          <p className="font-base mb-20">{selectedCountry}</p>
        </div>
      )}
    </div>
  );
}
