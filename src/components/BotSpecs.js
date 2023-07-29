import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const BotSpecs = () => {
  const { id } = useParams();
  const [selectedBot, setSelectedBot] = useState(null);
  const history = useHistory();

  useEffect(() => {
    // Fetch bot data using the provided API endpoint
    fetch(`http://localhost:8001/bots/${id}`)
      .then((response) => response.json())
      .then((data) => setSelectedBot(data))
      .catch((error) => console.log('Error fetching bot data:', error));
  }, [id]);

  const handleEnlist = () => {
    // Logic to enlist the bot into your army
    // ...
  };

  const handleBack = () => {
    history.push('/');
  };

  if (!selectedBot) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{selectedBot.name}</h2>
      <p>Health: {selectedBot.health}</p>
      <p>Damage: {selectedBot.damage}</p>
      <p>Armor: {selectedBot.armor}</p>
      <p>Class: {selectedBot.bot_class}</p>
      <p>Catchphrase: {selectedBot.catchphrase}</p>
      <img src={selectedBot.avatar_url} alt={selectedBot.name} />

      <button onClick={handleEnlist}>Enlist</button>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default BotSpecs;
