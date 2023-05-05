import React from "react";
import { BrowserRouter as Router, } from "react-router-dom";
import Navbar from "./Components/Navbar/main";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
      </Router>
    </React.Fragment>
  );
}

export default App;
