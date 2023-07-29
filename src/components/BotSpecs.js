import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function BotSpecs() {
  const { id } = useParams();
  const [bot, setBot] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8001/bots/${id}`)
      .then((response) => response.json())
      .then((data) => setBot(data));
  }, [id]);

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
      <Link to="/">Back to Collection</Link>
    </div>
  );
}

export default BotSpecs;
