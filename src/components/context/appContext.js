import { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('App Context appContext Provider İçerisinde olmalı!!');
  }

  return context;
};

const AppContextProvider = ({ children }) => {
  const [favoriler, setFavoriler] = useState([]);

  const addToFavoriler = (kitap) => {
    const eskiFavoriler = [...favoriler];

    const yeniFavoriler = eskiFavoriler.concat(kitap);

    setFavoriler(yeniFavoriler);
  };

  const deleteFromFavoriler = (id) => {
    const eskiFavoriler = [...favoriler];
    const yeniFavoriler = eskiFavoriler.filter((kitap) => kitap.id !== id);

    setFavoriler(yeniFavoriler);
  };

  return (
    <AppContext.Provider
      value={{ favoriler, addToFavoriler, deleteFromFavoriler }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
