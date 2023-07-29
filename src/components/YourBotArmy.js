import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ army, removeFromArmy }) => {
  return (
    <div className="bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-list">
        {army.map((bot) => (
          <BotCard key={bot.id} bot={bot} removeFromArmy={removeFromArmy} />
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
