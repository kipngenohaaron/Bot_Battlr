import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={BotCollection} />
          <Route path="/army" component={YourBotArmy} />
          <Route path="/bot/:id" component={BotSpecs} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
