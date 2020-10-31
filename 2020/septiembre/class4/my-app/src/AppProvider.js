import React, {
  useState,
} from 'react';

import { AppProvider } from './AppContext';

function AppProviderContext({ children }) {
  const [data, setData] = useState({
    theme: 'dark',
    user: {
      firstName: 'pepe',
    },
  });

  return (
    <AppProvider value={data}>
      {children}
    </AppProvider>
  );
}

export default AppProviderContext;
