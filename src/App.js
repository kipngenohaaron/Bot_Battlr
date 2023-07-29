import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import data from './src/db.json'

function App() {
  const [selectedBot, setSelectedBot] = useState(null);

  return (
    <Router>
      <div className="App">
        <h1>Bot Battlr</h1>
        <Routes>
          <Route path="/" element={<BotCollection setSelectedBot={setSelectedBot} />} />
          <Route path="/your-bot-army" element={<YourBotArmy setSelectedBot={setSelectedBot} />} />
          <Route path="/bots/:id" element={<BotSpecs selectedBot={selectedBot} setSelectedBot={setSelectedBot} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
