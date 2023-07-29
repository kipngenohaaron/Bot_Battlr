import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const BotSpecs = ({ bots }) => {
  const { id } = useParams();
  const [selectedBot, setSelectedBot] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const bot = bots.find((bot) => bot.id === parseInt(id));
    setSelectedBot(bot);
  }, [bots, id]);

  const handleEnlist = () => {
    history.push('/');
  };

  return (
    <div className="bot-specs">
      {selectedBot ? (
        <>
          <img src={selectedBot.avatar_url} alt={selectedBot.name} />
          <h2>{selectedBot.name}</h2>
          <p>{selectedBot.bot_class}</p>
          <p>Health: {selectedBot.health}</p>
          <p>Damage: {selectedBot.damage}</p>
          <p>Armor: {selectedBot.armor}</p>
          <p>Catchphrase: {selectedBot.catchphrase}</p>
          <button onClick={handleEnlist}>Enlist</button>
          <button onClick={() => history.push('/')}>Back</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BotSpecs;
