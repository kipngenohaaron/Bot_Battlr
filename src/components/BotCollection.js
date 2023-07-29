import React, { useState, useEffect } from 'react';

const BotCollection = () => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots') // Assuming the JSON DB server is running at http://localhost:8001
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div>
      <h1>Bot Collection</h1>
      <div>
        {bots.map((bot) => (
          <div key={bot.id}>
            <h2>{bot.name}</h2>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            <button>Add to Army</button>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
