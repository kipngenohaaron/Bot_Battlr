import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BotCollection = ({ setSelectedBot }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8001/bots')
      .then((response) => setBots(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Available Bots</h2>
      <div className="bot-collection">
        {bots.map((bot) => (
          <div key={bot.id} className="bot-card">
            <h3>{bot.name}</h3>
            <img src={bot.avatar_url} alt={bot.name} />
            <Link to={`/bots/${bot.id}`}>View Details</Link>
            <button onClick={() => setSelectedBot(bot)}>Enlist</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
