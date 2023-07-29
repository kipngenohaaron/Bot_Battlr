import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div>
      <h1>Bot Collection</h1>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
            <Link to={`/bot/${bot.id}`}>{bot.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BotCollection;
