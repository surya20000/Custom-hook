import { useState, useEffect } from 'react';

function useStorage(key, initialValue = '') {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? storedValue : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}

export default useStorage;
