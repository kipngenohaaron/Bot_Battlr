import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<BotCollection />} />
          <Route path="/bot/:id" element={<BotSpecs />} />
          <Route path="/your-army" element={<YourBotArmy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
