import React, { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const addToArmy = (bot) => {
    setArmy([...army, bot]);
  };

  const removeFromArmy = (id) => {
    setArmy(army.filter((bot) => bot.id !== id));
  };

  const dischargeBot = (id) => {
    setArmy(army.filter((bot) => bot.id !== id));
    fetch(`http://localhost:8001/bots/${id}`, {
      method: 'DELETE',
    });
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <h1>Bot Battlr</h1>
            <BotCollection bots={bots} addToArmy={addToArmy} />
            <YourBotArmy army={army} removeFromArmy={removeFromArmy} />
          </Route>
          <Route path="/bots/:id">
            <BotSpecs bots={bots} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
