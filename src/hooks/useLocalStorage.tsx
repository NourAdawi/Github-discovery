import { useState, useEffect, useContext } from 'react';
import { FavoritesContext } from '../Context/localStorageContext';

export const useFavorites = () => useContext(FavoritesContext);

// deprecated
// This was created first as a general hook for local storage, but then specific favourite hook was created to use it with context
function getStorageValue(key, defaultValue) {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
