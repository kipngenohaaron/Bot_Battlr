import React from 'react';

const BotCollection = ({ bots, yourBotArmy, enlistBot, releaseBot, dischargeBot, showBotSpecs }) => {
  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <div className="bot-list">
        {bots.map((bot) => (
          <div key={bot.id} className="bot-card">
            <h3>{bot.name}</h3>
            <img src={bot.avatar_url} alt='image' />
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Bot Class: {bot.bot_class}</p>
            <button onClick={() => enlistBot(bot)}>Enlist</button>
            <button onClick={() => showBotSpecs(bot)}>Show Specs</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
