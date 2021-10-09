import React from "react";
import "./App.css";
import Header from "./components/header/Header.jsx";
import SearchBar from "./components/header/SearchBar";
import IndividualEvent from "./components/body/IndividualEvent";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <div className="row preevents-maindiv">

        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-9">
          <IndividualEvent />
        </div>
      </div>
    </div>
  );
}

export default App;
