import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { ToDo } from "./Components/ToDo";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
         {/* < <Route path="ToDo" exact component={ ToDo }/>> */}
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
