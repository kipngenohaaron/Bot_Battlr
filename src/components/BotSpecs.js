import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function BotSpecs() {
  // State and effect hooks for fetching and displaying specific bot data
  const [bot, setBot] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:8001/bots/${id}`)
      .then((response) => response.json())
      .then((data) => setBot(data));
  }, [id]);

  // Function to handle bot enlistment

  return (
    <div>
      {/* Render bot details here */}
      <button onClick={() => history.goBack()}>Go Back</button>
      {/* Handle bot enlistment here */}
    </div>
  );
}

export default BotSpecs;
