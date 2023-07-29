import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BotCollection() {
  // State and effect hooks for fetching and displaying bot data
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  // Function to handle adding bots to the army

  return (
    <div>
      {/* Render bot cards here */}
      {bots.map((bot) => (
        <div key={bot.id}>
          {/* Bot information */}
          <Link to={`/bots/${bot.id}`}>{bot.name}</Link>
          {/* Button to add bot to the army */}
          {/* Handle bot enlistment here */}
        </div>
      ))}
    </div>
  );
}

export default BotCollection;
