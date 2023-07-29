import React from 'react';
import { Link } from 'react-router-dom';

const BotCard = ({ bot, addToArmy, removeFromArmy }) => {
  const handleAddToArmy = () => {
    addToArmy(bot);
  };

  const handleRemoveFromArmy = () => {
    removeFromArmy(bot.id);
  };

  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      {addToArmy && (
        <button onClick={handleAddToArmy}>Enlist</button>
      )}
      {removeFromArmy && (
        <button onClick={handleRemoveFromArmy}>Release</button>
      )}
      {removeFromArmy && (
        <button className="red-button" onClick={() => handleRemoveFromArmy(bot.id)}>Discharge</button>
      )}
      <Link to={`/bots/${bot.id}`}>View Details</Link>
    </div>
  );
};

export default BotCard;
