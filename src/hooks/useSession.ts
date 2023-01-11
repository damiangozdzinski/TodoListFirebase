import { useEffect, useState } from 'react';

export const useSession = (sessionKey: string, keepOnWindowClosed = true) => {
  if (!sessionKey) throw new Error('Session Key was not provided to useSession hook');

  const getStorage = () => {
    return keepOnWindowClosed ? localStorage : sessionStorage;
  };

  const getStorageValue = () => {
    try {
      const storageValue = getStorage().getItem(sessionKey);
      if (storageValue != null) {
        try {
          const session = JSON.parse(storageValue);
          return session;
        } catch (parseError) {
          return storageValue;
        }
      }
    } catch (storageValueError) {
      console.warn(
        'useSession could not access the browser storage. Session will be lost when closing browser window'
      );
    }

    return null;
  };

  const [state, setState] = useState(getStorageValue);

  const save = (sessionValue: unknown) => {
    if (typeof sessionValue == 'object' || typeof sessionValue == 'string') {
      getStorage().setItem(sessionKey, JSON.stringify(sessionValue));
      setState(sessionValue);
    } else {
      throw new Error('useSession hook only accepts objects or strings as session values');
    }
  };

  const clear = () => {
    getStorage().removeItem(sessionKey);
    setState(null);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const syncState = (event: any) => {
    if (event.key === sessionKey) {
      setState(getStorageValue());
    }
  };

  useEffect(() => {
    window.addEventListener('storage', syncState);
    return () => {
      window.removeEventListener('storage', syncState);
    };
  }, [sessionKey]);
  return { session: state, save, clear };
};
