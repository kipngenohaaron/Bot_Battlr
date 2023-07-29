import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const BotSpecs = ({ selectedBot, setSelectedBot }) => {
  const [bot, setBot] = useState(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (!selectedBot) {
      axios
        .get(`http://localhost:8001/bots/${id}`)
        .then((response) => setBot(response.data))
        .catch((error) => console.error('Error fetching bot data:', error));
    } else {
      setBot(selectedBot);
    }
  }, [selectedBot, id]);

  const handleEnlist = () => {
    setSelectedBot(bot);
    history.push('/your-bot-army');
  };

  const handleRelease = () => {
    setSelectedBot(null);
    history.push('/your-bot-army');
  };

  const handleDischarge = () => {
    axios
      .delete(`http://localhost:8001/bots/${id}`)
      .then(() => {
        setSelectedBot(null);
        history.push('/your-bot-army');
      })
      .catch((error) => console.error('Error deleting bot:', error));
  };

  if (!bot) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      {selectedBot ? (
        <button onClick={handleRelease}>Release</button>
      ) : (
        <button onClick={handleEnlist}>Enlist</button>
      )}
      <button onClick={handleDischarge}>Discharge</button>
    </div>
  );
};

export default BotSpecs;
