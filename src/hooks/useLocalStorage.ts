'use client';

import { useState } from 'react';

/**
 * A robust custom hook for persistent state management using the browser's LocalStorage API.
 * Features automatic JSON serialization/deserialization and SSR safety.
 * 
 * @template T - The type of the value to store.
 * @param {string} key - The unique identifier used to store the value in LocalStorage.
 * @param {T} initialValue - The fallback value used if no existing value is found in storage.
 * @returns {readonly [T, (value: T | ((val: T) => T)) => void]} A stateful value and a function to update it.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  // Initialize state with value from local storage or initialValue
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage.
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}
