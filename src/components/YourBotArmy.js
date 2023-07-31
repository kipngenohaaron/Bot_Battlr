import React from 'react';

const YourBotArmy = ({ yourBotArmy, releaseBot, dischargeBot }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-list">
        {yourBotArmy.map((bot) => (
          <div key={bot.id} className="bot-card">
            <h3>{bot.name}</h3>
            
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Bot Class: {bot.bot_class}</p>
            <img src={bot.avatar_url} alt='image' />
            <button onClick={() => releaseBot(bot)}>Release</button>
            <button onClick={() => dischargeBot(bot)}>Discharge</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
