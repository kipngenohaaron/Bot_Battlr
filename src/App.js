import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Bot Collection</Link>
            </li>
            <li>
              <Link to="/your-bot-army">Your Bot Army</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<BotCollection />} />
          <Route path="/your-bot-army" element={<YourBotArmy />} />
          <Route path="/bots/:id" element={<BotSpecs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
