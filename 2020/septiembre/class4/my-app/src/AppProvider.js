import React, {
  useState,
  useEffect,
} from 'react';

import { useSelector } from 'react-redux';

import { AppProvider } from './AppContext';

function AppProviderContext({ children }) {
  const Users = useSelector((state) => state.Users);
  const [data, setData] = useState({
    theme: 'dark',
    user: null,
    logged: false,
  });

  useEffect(() => {
    setData({
      ...data,
      user: Users.userData,
      logged: Users.logged,
    });
  }, [Users]);

  return (
    <AppProvider value={data}>
      {children}
    </AppProvider>
  );
}

export default AppProviderContext;
