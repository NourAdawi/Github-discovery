import React, { createContext, useContext, useEffect, useState } from 'react';

export const LocalStorageContext = React.createContext(null);

export const FavoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() =>
    getStorageValue('favourites', [])
  );

  // Update local storage when favorites change
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

function getStorageValue(key, defaultValue) {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}
