// src/components/BotCard.js
import React from 'react';

const BotCard = ({ bot, onEnlist }) => {
  return (
    <div>
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      {/* Add more bot details */}
      <button onClick={() => onEnlist(bot)}>Enlist</button>
    </div>
  );
};

export default BotCard;
