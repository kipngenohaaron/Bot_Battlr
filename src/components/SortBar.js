import React from 'react';

const SortBar = ({ sortBots }) => {
  return (
    <div className="sort-bar">
      <p>Sort by:</p>
      <button onClick={() => sortBots('health')}>Health</button>
      <button onClick={() => sortBots('damage')}>Damage</button>
      <button onClick={() => sortBots('armor')}>Armor</button>
    </div>
  );
};

export default SortBar;
