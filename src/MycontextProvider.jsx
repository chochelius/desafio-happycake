import React, { createContext, useState } from 'react';

// create a new context
export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  // set up state
  const [myValue, setMyValue] = useState('default value');

  // create an object with the values you want to pass down
  const contextValues = {
    myValue,
    setMyValue,
  };

  // wrap the component tree with the context provider
  return (
    <MyContext.Provider value={contextValues}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;