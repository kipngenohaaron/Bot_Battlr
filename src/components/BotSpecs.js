import React from 'react';

const BotSpecs = ({ bot }) => {
  return (
    <div>
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      {/* Add more bot details */}
    </div>
  );
};

export default BotSpecs;
