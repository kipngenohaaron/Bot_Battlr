import React from 'react';
import { Link } from 'react-router-dom';

const BotCard = ({ bot, enlistBot }) => {
  const handleEnlist = () => {
    enlistBot(bot);
  };

  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={handleEnlist}>Enlist</button>
      <Link to={`/bots/${bot.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default BotCard;
