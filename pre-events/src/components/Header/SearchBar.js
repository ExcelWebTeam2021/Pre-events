import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import "./SearchBar.css";

function SearchBar() {
  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };

  const eventItems = [
    {
      name: "Y B Hackathon",
      category: "CS Tech",
      deadline: "",
      description: "",
      duration: "1 week",
      startDate: "C",
      endDate: "C",
      fees: "nil",
      img: "url",
      prize: "5,000",
      status: "Upcoming",
      tags: ["iot", "machine learning"],
      teamSize: "Individual",
      type: "competition",
    },

    {
      name: "Loud and Queer ",
      category: "CS Tech",
      deadline: "",
      description: "",
      duration: "1 week",
      startDate: "C",
      endDate: "C",
      fees: "nil",
      img: "url",
      prize: "5,000",
      status: "Upcoming",
      tags: ["iot", "machine learning"],
      teamSize: "Individual",
      type: "competition",
    },
  ];

  return (
    <div className="searchbar">
      <div style={{ width: 1100, margin: 20 }}>
        <ReactSearchAutocomplete
          items={eventItems}
          fuseOptions={{ keys: ["name", "description"] }} // Search on both fields
          resultStringKeyName="name" // String to display in the results
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          onClear={handleOnClear}
          showIcon={true}
          placeholder="Search Events"
          styling={{
            height: "50px",
            border: "2px solid white",
            borderRadius: "10px",
            backgroundColor: "white",
            boxShadow: "none",
            hoverBackgroundColor: "#DAC9FF",
            color: "black",
            fontSize: "12px",
            fontFamily: "Courier",
            iconColor: "black",
            lineColor: "black",
            placeholderColor: "grey",
            clearIconMargin: "3px 8px 0 0",
          }}
        />
      </div>
    </div>
  );
}

export default SearchBar;
