import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';

function App() {
  const [selectedBot, setSelectedBot] = useState(null);

  return (
    <Router>
      <div className="App">
        <h1>Bot Battlr</h1>
        <Switch>
          <Route exact path="/">
            <BotCollection setSelectedBot={setSelectedBot} />
          </Route>
          <Route path="/your-bot-army">
            <YourBotArmy setSelectedBot={setSelectedBot} />
          </Route>
          <Route path="/bots/:id">
            <BotSpecs selectedBot={selectedBot} setSelectedBot={setSelectedBot} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
