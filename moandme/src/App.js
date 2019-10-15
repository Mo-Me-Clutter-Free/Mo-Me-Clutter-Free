import React from "react";
import "./App.css";
import LandingPage from "./LandingPage/LandingPage";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <LandingPage />
          <Routes />
        </div>
      </header>
    </div>
  );
}

export default App;
