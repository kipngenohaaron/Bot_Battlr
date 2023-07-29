import React from 'react';
import BotCard from './BotCard';

const BotCollection = ({ bots, addToArmy }) => {
  return (
    <div className="bot-collection">
      <h2>All Bots</h2>
      <div className="bot-list">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} addToArmy={addToArmy} />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
