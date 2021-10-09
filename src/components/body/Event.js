import React, { useState, useEffect } from "react";
import Events from "../events.json";
import "../stylesheet/IndividualEvent.css";

import IndividualEvent from "./IndividualEvent";

export default function Sor() {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("prize");
      

  useEffect(() => {
    const sortArray = type => {
      const types = {
        prize: 'prize',
        deadline: 'deadline',
        
      };
      const sortProperty = types[type];
      const sorted = [...Events].sort((a, b) => (b[sortType] > a[sortType]) ? 1: -1);
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]); 


  return (
      <div>
        <h3>Sort By:</h3>
        <select onChange={(e) => setSortType(e.target.value)}> 
        <option value="prize">prize</option>
        <option value="deadline">deadline</option>
        </select>
        <IndividualEvent data={data} />
      </div>
  );
}