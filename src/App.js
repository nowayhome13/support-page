import React from "react";
import ErrorPage from "./Components/ErrorPage";
import Help from "./Components/Help";
import "./Stylesheets/index.css";
import './Stylesheets/Error-Page.css';
import { Route , Routes } from "react-router-dom";

function App() {


  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={<ErrorPage />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
