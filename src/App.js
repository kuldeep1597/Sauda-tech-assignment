import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharacterName from "./components/CharacterName";
import CharacterDetail from "./components/CharacterDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={CharacterName} />
          <Route path="/characterDetail" component={CharacterDetail} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
