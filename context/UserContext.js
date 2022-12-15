import {createContext} from 'react';

export const UserContext = createContext({
  name: true,
});

export const UserProvider = ({children}) => {
  const dataUSer = [
    {
      id: 1,
      name: 'Dwi GM',
      password: 123,
    },
    {
      id: 2,
      name: 'Munawir',
      password: 123,
    },
    {
      id: 3,
      name: 'Lanten',
      password: 123,
    },
  ];

  return (
    <UserContext.Provider value={dataUSer}>{children}</UserContext.Provider>
  );
};
