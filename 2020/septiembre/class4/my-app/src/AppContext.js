import React from 'react';

const AppContext = React.createContext({
  theme: 'dark',
  logged: false,
});

export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;
