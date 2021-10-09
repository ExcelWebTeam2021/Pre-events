import React from "react";
import "./App.css";
import Header from "./components/header/Header.jsx";
import SearchBar from "./components/header/SearchBar";
import Sidebar from "./components/sidebar/Sidebar";
import Event from "./components/body/Event";

function App() {
  return (
    <div>
      <Header />
      <div className="row preevents-maindiv">
        <div className="col-12">
          <SearchBar />
        </div>
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-9">
          <Event />
        </div>
      </div>
    </div>
  );
}

export default App;
