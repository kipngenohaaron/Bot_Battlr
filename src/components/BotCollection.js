// src/components/BotCollection.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BotCollection = () => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8001/bots')
      .then(response => setBots(response.data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  return (
    <div>
      <h1>Bot Collection</h1>
      {bots.map(bot => (
        <div key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} />
          <h2>{bot.name}</h2>
          {/* Add more bot details */}
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
