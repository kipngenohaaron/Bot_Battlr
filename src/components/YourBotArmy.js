import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function YourBotArmy() {
  const [armyBots, setArmyBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/your-army')
      .then((response) => response.json())
      .then((data) => setArmyBots(data));
  }, []);

  const handleDischarge = (id) => {
    fetch(`http://localhost:8001/your-army/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setArmyBots((prevArmyBots) => prevArmyBots.filter((bot) => bot.id !== id));
    });
  };

  return (
    <div>
      <h1>Your Bot Army</h1>
      <ul>
        {armyBots.map((bot) => (
          <li key={bot.id}>
            <Link to={`/bot/${bot.id}`}>{bot.name}</Link>{' '}
            <button onClick={() => handleDischarge(bot.id)}>Discharge</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YourBotArmy;
