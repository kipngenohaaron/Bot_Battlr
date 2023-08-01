import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [basename, setBasename] = useState('example.com');

 

  return (
    <MyContext.Provider value={{ basename }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
