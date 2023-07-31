import React from 'react';

const BotSpecs = ({ bot, onEnlistBot }) => {
  return (
    <div>
      <h2>Bot Specifications</h2>
      {bot && (
        <div>
          <img src={bot.avatar_url} alt={bot.name} />
          <p>Name: {bot.name}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Class: {bot.bot_class}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
          <button onClick={() => onEnlistBot(bot)}>Enlist</button>
        </div>
      )}
    </div>
  );
};

export default BotSpecs;
