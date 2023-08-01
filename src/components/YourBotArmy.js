import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ yourBotArmy, releaseBot, dischargeBot }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-list">
        {yourBotArmy.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            releaseBot={releaseBot}
            dischargeBot={dischargeBot}
          />
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
