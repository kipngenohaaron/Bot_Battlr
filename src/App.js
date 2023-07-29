import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={BotCollection} />
          <Route exact path="/army" component={YourBotArmy} />
          <Route exact path="/bots/:id" component={BotSpecs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
