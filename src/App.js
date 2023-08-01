import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import SortBar from './components/SortBar';
import './index.css'; 
import './App.css';
const App = () => {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [showBotSpecs, setShowBotSpecs] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8001/bots');
      setBots(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const enlistBot = (bot) => {
    setYourBotArmy((prev) => [...prev, bot]);
  };

  const releaseBot = (bot) => {
    setYourBotArmy((prev) => prev.filter((b) => b.id !== bot.id));
  };

  const dischargeBot = async (bot) => {
    try {
      await axios.delete(`http://localhost:8001/bots/${bot.id}`);
      setYourBotArmy((prev) => prev.filter((b) => b.id !== bot.id));
    } catch (error) {
      console.error('Error deleting bot:', error);
    }
  };

  const showBotSpecsHandler = (bot) => {
    setSelectedBot(bot);
    setShowBotSpecs(true);
  };

  const hideBotSpecs = () => {
    setShowBotSpecs(false);
  };

  const sortBots = (property) => {
    setBots((prev) => [...prev].sort((a, b) => b[property] - a[property]));
  };

  const filterBots = (classes) => {
    if (classes.length === 0) {
      fetchData();
    } else {
      const filteredBots = bots.filter((bot) => classes.includes(bot.bot_class));
      setBots(filteredBots);
    }
  };

  const botClasses = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

  return (
    <div className="App">
      <h1>Bot Battlr </h1>
      <div className="App-content">
        <div className="App-left">
          <SortBar sortBots={sortBots} />
          <BotCollection
            bots={bots}
            yourBotArmy={yourBotArmy}
            enlistBot={enlistBot}
            releaseBot={releaseBot}
            dischargeBot={dischargeBot}
            showBotSpecs={showBotSpecsHandler}
          />
        </div>
        <div className="App-right">
          <YourBotArmy
            yourBotArmy={yourBotArmy}
            releaseBot={releaseBot}
            dischargeBot={dischargeBot}
          />
        </div>
      </div>
      {showBotSpecs && selectedBot && (
        <div className="App-bot-specs">
          <button onClick={hideBotSpecs}>Back</button>
          <button onClick={() => enlistBot(selectedBot)}>Enlist</button>
          <h2>{selectedBot.name}</h2>
          <p>Health: {selectedBot.health}</p>
          <p>Damage: {selectedBot.damage}</p>
          <p>Armor: {selectedBot.armor}</p>
          <p>Bot Class: {selectedBot.bot_class}</p>
          <p>Catchphrase: {selectedBot.catchphrase}</p>
          <img src={selectedBot.avatar_url} alt="Bot Avatar" />
        </div>
      )}
      <div className="App-filter">
        <p>Filter by class:</p>
        {botClasses.map((botClass) => (
          <label key={botClass}>
            <input
              type="checkbox"
              value={botClass}
              onChange={(e) => {
                const selectedClasses = botClasses.filter(
                  (className) => e.target.value === className || classes.includes(className)
                );
                filterBots(selectedClasses);
              }}
            />
            {botClass}
          </label>
        ))}
        <button
          onClick={() => {
            filterBots(classes);
          }}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default App;
