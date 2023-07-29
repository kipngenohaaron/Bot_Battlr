import React from 'react';

const YourBotArmy = () => {
  // State to hold enlisted bots
  const [enlistedBots, setEnlistedBots] = useState([]);

  const handleRemoveFromArmy = (botId) => {
    // Logic to remove a bot from the enlistedBots array
    setEnlistedBots(enlistedBots.filter((bot) => bot.id !== botId));
  };

  return (
    <div>
      <h1>Your Bot Army</h1>
      <div>
        {enlistedBots.map((bot) => (
          <div key={bot.id}>
            <h2>{bot.name}</h2>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            <button onClick={() => handleRemoveFromArmy(bot.id)}>Release</button>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
