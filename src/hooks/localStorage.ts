import { useEffect, useState } from "react";

declare const window: string;
declare const localStorage: {
  getItem: (key: string) => string | number | boolean | null;
  setItem: (key: string, value: string | number | boolean) => void;
};

export const useLocalStorage = (
  key: string,
  initialState: string | number | boolean | null = null
) => {
  const [data, setData] = useState(initialState);

  const isWindow = typeof window !== "undefined";
  const isLcalStorage = typeof localStorage !== "undefined";

  useEffect(() => {
    if (isWindow && isLcalStorage && localStorage.getItem(key) !== null) {
      setData(localStorage.getItem(key));
    }
  }, [isWindow, isLcalStorage, key]);

  const setLocalStorage = (value: string | number | boolean) => {
    if (isWindow && isLcalStorage) {
      localStorage.setItem(key, value);
      setData(value);
    }
  };

  return {
    data,
    setLocalStorage
  };
};
